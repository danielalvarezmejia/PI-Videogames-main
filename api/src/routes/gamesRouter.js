const { Router } = require('express');
const { getVideogames, getVideogamesById, postVideogames } = require('../handlers/gamesHandler');

const gamesRouter = Router();

gamesRouter.get('/', getVideogames);

gamesRouter.get('/:id', getVideogamesById);

gamesRouter.post('/', postVideogames)

module.exports = gamesRouter;