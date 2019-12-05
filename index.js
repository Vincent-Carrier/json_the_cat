const { fetchBreedDescription } = require("./breedFetcher");

const query = process.argv.slice(2).join(" ");

fetchBreedDescription(query, (error, description) => {
  if (error) {
    console.log(`Something went wrong: ${error}`);
  } else {
    console.log(description);
  }
});
