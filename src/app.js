const path = require('path')
const express = require('express')
const hbs = require('hbs')
const staticPagesRouter = require('./routers/static-pages')


const app = express()
const port = process.env.PORT || 3000

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '..', 'public')
const viewsPath = path.join(__dirname, '..', 'templates', 'views');
const partialsPath = path.join(__dirname, '..', 'templates', 'partials')

// Setup for handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Static pages
app.use(staticPagesRouter)

// blog 404
app.get('/blog/*', (req, res) => {
    res.render('404',  {
        title: '404',
        name: 'AF',
        message: 'Help article not found'
    })
})

// 404 page
app.get('*', (req, res) => {
    res.render('404',  {
        title: '404',
        name: 'AF',
        message: 'Page not found'
    })
})

app.listen(port, () =>{
    console.log('Server is up on port ' + port + '.')
})
