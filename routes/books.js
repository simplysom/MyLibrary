const express = require('express')
const router = express.Router()
const Book = require('../models/book')

// All Books Route
router.get('/', async (req, res) => {
    res.send("All books");
})

// New Book Route
router.get('/new', (req, res) => {
    res.send("New books");
})

// Create Book Route
router.post('/', async (req, res) => {
    res.send("Create books");
})

module.exports = router