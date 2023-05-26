const { Router } = require('express');
const { getVideogames, getVideogamesById, postVideogames, deleteVideogames } = require('../handlers/gamesHandler');

const gamesRouter = Router();

gamesRouter.get('/', getVideogames);

gamesRouter.get('/:id', getVideogamesById);

gamesRouter.post('/', postVideogames);

gamesRouter.delete('/:id', deleteVideogames);

module.exports = gamesRouter;