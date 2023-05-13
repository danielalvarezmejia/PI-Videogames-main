const { getAllGames } = require('../controllers/gamesController');

const getVideogames = async (req, res) => {
  try {
    res.status(200).json(getAllGames());
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getVideogamesById = async (req, res) => {
  
};

const postVideogames = async (req, res) => {
  
};

module.exports = {
  getVideogames, 
  getVideogamesById, 
  postVideogames
}