const { getAllGenres } = require('../controllers/genresController');

const getGenres = async (req, res) => {
  try {
    const result = await getAllGenres();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
};

module.exports = { getGenres }