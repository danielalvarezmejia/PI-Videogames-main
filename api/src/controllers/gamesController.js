const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;
const { Videogame, Genre } = require('../db');
const { Op } = require("sequelize");

const filterApiGames = async (arr) => {
  const resultApi = arr.map((el) => {
    return {
      id: el.id,
      name: el.name,
      // falta description en la API
      platforms: el.platforms.map(n => n.platform.name),
      backgroung_image: el.backgroung_image,
      released: el.released,
      rating: el.rating
    }
  })
  return resultApi;
}

const getAllGames = async () => {
  // Search all data from DB
  const allDB = await Videogame.findAll();

  const apiGames = (await axios.get(`${API_URL}games?key=${API_KEY}`)).data.results;
  const filterApi = await filterApiGames(apiGames)

  // console.log(filterApi);
  return [...filterApi, ...allDB];
};

const getByName = async (name) => {
  const dbGame = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`, // Search case-insensitive
      },
    },
    limit: 15
  })

  if(dbGame.length > 0) return dbGame; 

  const response = (await axios.get(`${API_URL}games?search=${name}&key=${API_KEY}`)).data.results;
  const filterApiByName = await filterApiGames(response).slice(0, 15);

  if(filterApiByName.length > 0) return filterApiByName;

  return 'No game found with that name';
};

// GET | /videogames/name?="..."
// Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el videojuego, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.

const getGameById = async (id) => {

  if (!isNaN(id)){
    // Get the game detail from the API
    const apiGame = (await axios.get(`${API_URL}games/${id}?key=${API_KEY}`)).data;
    const filterApi = await filterApiGames([apiGame]);
    const game = filterApi[0];

    // Get the genres associated with the game
    const apiGenre = (await axios.get(`${API_URL}genres/${id}?key=${API_KEY}`)).data;
    game.apiGenre = {name: apiGenre.name}
    return game;    
  } else {
    // Get the game detail from the DBB
    const game = await Videogame.findByPk(id, { include: Genre });
    return {
      id: game.id,
      name: game.name,
      description: game.description,
      platforms: game.platforms,
      background_image: game.background_image,
      released: game.released,
      rating: game.rating,
      genres: game.Genres.map(genre => genre.name)
    }
  }
};

// 📍 GET | /videogames/:idVideogame
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.

const createGame = async (name, description, platforms, backgroung_image, released, rating) => {
  const newGame = await Videogame.create({ name, description, platforms, backgroung_image, released, rating })
  return newGame
};

module.exports = {
  getAllGames, getGameById, createGame, getByName
}