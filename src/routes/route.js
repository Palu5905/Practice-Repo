const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/book-data",UserController.createBook)
router.get('/author-book',UserController.bookAuthor)
router.get("/year-find/",UserController.yearbook)
router.get("/price-find/",UserController.pricelist)
router.get("/tru-price/",UserController.getrandombook)



module.exports = router;