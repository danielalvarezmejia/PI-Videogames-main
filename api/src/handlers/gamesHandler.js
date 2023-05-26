const { getAllGames, getGameById, createGame, getByName } = require('../controllers/gamesController');

const getVideogames = async (req, res) => {
  const { name } = req.query;
  try {
    const result = name 
      ? await getByName(name) 
      : await getAllGames()
    // const result = getAllGames()
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getVideogamesById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await getGameById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postVideogames = async (req, res) => {
  const { name, description, platforms, background_image, released, rating, genres } = req.body;

  try {
    const newGame = await createGame(name, description, platforms, background_image, released, rating, genres);
    res.status(200).json(newGame);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getVideogames, 
  getVideogamesById, 
  postVideogames
}