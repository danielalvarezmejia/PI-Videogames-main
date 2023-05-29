const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;
const { Genre } = require('../db');

const getAllGenres = async () => {
  const apiGenre = (await axios.get(`${API_URL}genres?key=${API_KEY}`)).data.results;
  
  const genreNames = apiGenre.map((g) => g.name);
  
  await Genre.bulkCreate(genreNames.map((name) => ({ name })));

  return genreNames;
};

module.exports = { getAllGenres };












// const dbGenre = await Genre.findAll();

// if (dbGenre.length === 0) {
//   const apiGenre = (await axios.get(`${API_URL}genres?key=${API_KEY}`)).data.results;
//   const result = apiGenre.map((g) => g.name);
//   await Genre.bulkCreate(result.map((name) => ({ name })));

//   return result;
// } else {
//   return dbGenre.map((g) => g.name)
// }