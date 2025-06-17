const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

router.get('/', async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.json(experiences);
    } catch (error) {
        console.error(error); // debug
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
