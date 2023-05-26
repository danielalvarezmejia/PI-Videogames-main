const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

const filterApiGames = async (arr) => {
  const resultApi = await Promise.all(arr.map(async (el) => {
    const apiGenre = (await axios.get(`https://api.rawg.io/api/genres/${el.id}?key=${API_KEY}`)).data;
    console.log('apiGenre: ', apiGenre);

    const genre = { name: apiGenre.name }
    return {
      id: el.id,
      name: el.name,
      // falta description en la API
      platforms: el.platforms.map(n => n.platform.name),
      background_image: el.background_image,
      released: el.released,
      rating: el.rating,
      genre: genre
    }
  }))
  return resultApi;
}

// const filterApiGames = async (arr) => {
//   const resultApi = arr.map((el) => {
//     return {
//       id: el.id,
//       name: el.name,
//       // falta description en la API
//       platforms: el.platforms.map(n => n.platform.name),
//       background_image: el.background_image,
//       released: el.released,
//       rating: el.rating,
//       genres: el.genres.map(genre => genre.name)

//     }
//   })
//   return resultApi;
// }

const getAllGames = async () => {
  // Search all data from API
  const totalPage = 5;
  const apiGames = []
  
  for(let page = 1; page <= totalPage; page++){
    const apiNext = (await axios.get(`${API_URL}games?key=${API_KEY}&page=${page}`)).data.results;
    // const apiNext = (await axios.get(`https://api.rawg.io/api/games?key=152e4dc0fb9947a0b62c635d5c2b110b&page=${page}`)).data.results;

    apiGames.push(...apiNext);
  }
  
  const filterApi = await filterApiGames(apiGames);
  console.log('filterApi: ', filterApi);
  return filterApi;
};

getAllGames()

// const getGenre = async () => {
//   try {
//     const response = await axios.get(`https://api.rawg.io/api/genres/1?key=152e4dc0fb9947a0b62c635d5c2b110b`);
//     const apiGenre = response.data;
//     console.log('apiGenre: ', apiGenre);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// getGenre();


// const getAllApiVideogames = async (url = `https://api.rawg.io/api/games?key=152e4dc0fb9947a0b62c635d5c2b110b&page_size=20`, videogames = []) => {
//   if (videogames.length === 100) return videogames;

//   try {
//     let auxVideogames;
//     let nextPage;
//     const response = await axios.get(url);
//     const { results, next } = response.data;
//     nextPage = next;
//     auxVideogames = results.map(vg => {
//       return {
//         id: vg.id,
//         name: vg.name,
//         image: vg.background_image,
//         rating: vg.rating_top,
//         genres: vg.genres.map(genre => genre.name)
//       };
//     });

//     videogames = [...videogames, ...auxVideogames];
//     console.log('videogames', videogames);
//     return getAllApiVideogames(nextPage, videogames);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// getAllApiVideogames()