const { Router } = require('express');

const gamesRouter = Router();

gamesRouter.get('/', (req, res) => {
  res.status(200).send('im in games')
})

module.exports = {
  gamesRouter
}