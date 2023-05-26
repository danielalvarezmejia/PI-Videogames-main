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
      background_image: el.background_image,
      released: el.released,
      rating: el.rating,
      genres: el.genres.map(genre => genre.name)
    }
  })
  return resultApi;
}

const getAllGames = async () => {
  // Search all data from API
  const totalPage = 5;
  const apiGames = []
  
  for(let page = 1; page <= totalPage; page++){
    const apiNext = (await axios.get(`${API_URL}games?key=${API_KEY}&page=${page}`)).data.results;
    apiGames.push(...apiNext);
  }
  
  const filterApi = await filterApiGames(apiGames);
  
  // Search all data from DBB
  const allDB = await Videogame.findAll({ include: Genre });

  // console.log(filterApi);
  return [...filterApi, ...allDB];
};

const getByName = async (name) => {
  const dbGame = await Videogame.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
    limit: 15
  })

  if(dbGame.length > 0) return dbGame; 

  const response = (await axios.get(`${API_URL}games?search=${name}&key=${API_KEY}`)).data.results;
  const filterApiByName = await filterApiGames(response);

  if(filterApiByName.length > 0) return filterApiByName.slice(0, 15);

  return 'No game found with that name';
};

const getGameById = async (id) => {

  if (!isNaN(id)){
    // Get the game detail from the API
    const apiGame = (await axios.get(`${API_URL}games/${id}?key=${API_KEY}`)).data;
    const filterApi = await filterApiGames([apiGame]);
    const game = filterApi[0];

    // Get the genres associated with the game
    // const apiGenre = (await axios.get(`${API_URL}genres/${id}?key=${API_KEY}`)).data;
    // game.apiGenre = { name: apiGenre.name }
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

const createGame = async (name, description, platforms, background_image, released, rating, genres) => {
  const newGame = await Videogame.create({ name, description, platforms, background_image, released, rating });
  const newGenre = await Genre.create({ name: genres });
  return newGame.addGenre(newGenre);
};

const deleteGameById = async (id) => {
  const game = await Videogame.findByPk(id);
  
  if(!game) throw Error(`Don't exist VideoGame with id ${id}`);
  
  const deleteId = await Videogame.destroy({
    where: { id },
  });
  
  return deleteId;
};

// !!!!!!!!FALTA PUT
module.exports = {
  getAllGames, getGameById, createGame, getByName, deleteGameById
}