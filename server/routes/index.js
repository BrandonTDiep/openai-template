const express = require('express');
const router = express.Router();
const recommendSongRoutes = require('./recommendSongRoutes');


router.get('/', (req, res) => {
    res.send('API is working');
});

router.use('/recommend-song', recommendSongRoutes);


module.exports = router;