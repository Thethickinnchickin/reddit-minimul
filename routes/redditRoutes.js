const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get("/", (req, res) => {
    res.render("home");
})

router.get('/hot/:subreddit', async (req, res) => {
    try {
        const redditCollections = await axios.get(`https://www.reddit.com/r/${req.params.subreddit}/hot.json`)

        res.json({
            success: true,
            things: redditCollections.data
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

router.get('/top/:subreddit', async (req, res) => {
    try {
        const redditCollections = await axios.get(`https://www.reddit.com/search?q=${req.params.subreddit}`)

        res.json(redditCollections.data);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});


module.exports = router;