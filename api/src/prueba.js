const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

const filterApiGames = async (arr) => {
  const resultApi = arr.map((el) => {
    return {
      id: el.id,
      name: el.name,
      platforms: el.platforms ? el.platforms.map(n => n.platform.name) : [],
      backgroung_image: el.backgroung_image,
      released: el.released,
      rating: el.rating
    }
  })
  return resultApi;
}

const getGameById = async (id = 1) => {
    const apiGame = (await axios.get(`https://api.rawg.io/api/games/1?key=152e4dc0fb9947a0b62c635d5c2b110b`)).data;
    const filterApi = await filterApiGames([apiGame]);
    const game = filterApi[0];

    const apiGenre = (await axios.get(`https://api.rawg.io/api/genres/${id}?key=152e4dc0fb9947a0b62c635d5c2b110b`)).data;

    game.apiGenre = {name: apiGenre.name}
    console.log(game)
    return game;    
 
};

getGameById()