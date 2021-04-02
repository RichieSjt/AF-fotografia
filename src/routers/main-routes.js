const express = require('express')
const writeIntoSheet = require('../utils/google-sheets')

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

// 404
router.get('*', (req, res) => {
    res.render('404',  {
        title: '404',
        name: 'AF',
        message: 'Page not found'
    })
})


// blog 404
router.get('/blog/*', (req, res) => {
    res.render('404',  {
        title: '404',
        name: 'AF',
        message: 'Blog article not found'
    })
})

router.post('/contacto', (req, res) => {
    try {
        contactForm = req.body
        
        if (contactForm.c !== '') {
            return res.send()
        }
        contactFormArray = Object.values(contactForm)
        contactFormArray.pop()
        
        writeIntoSheet(contactFormArray)
        res.send()
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router