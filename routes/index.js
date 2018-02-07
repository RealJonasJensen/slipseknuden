var express = require('express');
var router  = express.Router();

// Data
var slips        = require("../data/slips")
var nyheder      = require("../data/nyheder")
var medarbejdere = require("../data/medarbejdere")

// Routes

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { product: slips, news: nyheder });
});

// ======== Products ========

// Show all

router.get("/products", (req, res) => {
    res.render("all_products", {product: slips, news: nyheder})
})

// Show one

router.get("/products/:id", (req, res) => {
  let id = req.params.id;
  res.render("show_one", {product: slips, news: nyheder, id: id})
})

// Show one brand

router.get("/products/brand/:brand", (req, res) => {
  let brand_id = req.params.brand;
  res.render("show_one_brand", {product: slips, news: nyheder, brand_id: brand_id})
})

// ===== Info ====

// Om slipseknuden

router.get("/info", (req, res) => {
    res.render("info", {product: slips, news: nyheder, medarbejdere: medarbejdere})
})

// ===== Garanti =====

router.get("/garanti", (req, res) => {
  res.render("garanti", {product: slips, news: nyheder})
})

// ======= Nyheder =========

router.get("/nyheder", (req, res) => {
  res.render("nyheder", {product: slips, news: nyheder})
})

// ====== Contact =======

router.get("/contact", (req, res) => {
  res.render("contact", {product: slips, news: nyheder})
})

// let bool = false;

// let name = bool ? "Jonas" : "Jensen"

// console.log(name)


module.exports = router;

