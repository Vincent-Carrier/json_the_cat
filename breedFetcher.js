const request = require('request');

const baseUrl = "https://api.thecatapi.com/v1";

const fetchBreed = function(breed) {
  request(`${baseUrl}/breeds/search?q=${encodeURI(breed)}`, (err, response, body) => {
    handleResponse({err, response, body});
  });
};

const handleResponse = function({err, response, body}) {
  if (err || response.statusCode >= 300) {
    console.log("Something went wrong :(");
    if (err) throw err;
  }
  const catInfo = JSON.parse(body)[0];
  if (catInfo) {
    console.log(catInfo.description);
  } else {
    console.log("Your request didn't match anything");
  }
};

const query = process.argv.slice(2).join(" ");
fetchBreed(query);
