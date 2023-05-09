const { Router } = require('express');
const { gamesRouter } = require('./gamesRoutes');
const { genresRouter } = require('./genresRouter');

const router = Router();

router.get('/games', gamesRouter);
router.get('/genres', genresRouter);


module.exports = router;
