const express = require('express')

const router = new express.Router()

router.get('', (req, res) => {
    res.render('index', {
        active: { home: true }
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        active: { about: true }
    })
})

router.get('/wedding-portfolio', (req, res) => {
    res.render('wedding-portfolio', {
        active: { portfolio: true }
    })
})

router.get('/portrait-portfolio', (req, res) => {
    res.render('portrait-portfolio', {
        active: { portfolio: true }
    })
})

router.get('/product-portfolio', (req, res) => {
    res.render('product-portfolio', {
        active: { portfolio: true }
    })
})

router.get('/blog', (req, res) => {
    res.render('blog', {
        active: { blog: true }
    })
})

router.get('/tienda', (req, res) => {
    res.render('tienda', {
        active: { tienda: true }
    })
})

module.exports = router