const request = require('request');

const baseUrl = "https://api.thecatapi.com/v1";

module.exports.fetchBreedDescription = function(breed, callback) {
  request(`${baseUrl}/breeds/search?q=${encodeURI(breed)}`, (err, response, body) => {
    if (!err && response.statusCode >= 300) {
      err = new Error("Got status code: " + response.statusCode);
    }

    const cat = JSON.parse(body)[0];
    if (!cat) err = new Error("No results were found");
    if (err) callback(err, null);
    else callback(null, cat.description);
  });
};
