const express = require('express')
const router = express.Router()
const multer=require("multer");
const path=require("path");
const uploadPath=path.join('public',Book.coverImageBasePath);
const Book = require('../models/book')
const Author=require('../models/author')
const upload=multer({
    dest:uploadPath,
    fileFilter:(req,file,callback)
})

// All Books Route
router.get('/', async (req, res) => {
    res.send("All books");
})

// New Book Route
router.get('/new', async (req, res) => {
    try {
        const authors=await Author.find({});
        const book = new Book();
        res.render("books/new",{authors:authors,book:book});
    } catch {
        res.redirect("/books");
    }
    res.send("New books");
})

// Create Book Route
router.post('/', async (req, res) => {
    const book = new Book({
        title:req.body.title,
        author:req.body.author,
        publishDate:new Date(req.body.publishDate),
        pageCount:req.body.pageCount,
        description:req.body.description
    })
})

module.exports = router