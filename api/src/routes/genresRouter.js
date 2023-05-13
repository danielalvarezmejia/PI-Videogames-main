const { Router } = require('express');

const genresRouter = Router();

genresRouter.get('/', (req, res) => {
  res.status(200).send('im in genres')
  getGenersAll()
})

module.exports = genresRouter