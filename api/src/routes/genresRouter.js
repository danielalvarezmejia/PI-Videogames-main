const { Router } = require('express');

const genresRouter = Router();

genresRouter.get('/', (req, res) => {
  res.status(200).send('im in games')
})

module.exports = {
  genresRouter
}