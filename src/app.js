const path = require('path')
const express = require('express')
const hbs = require('hbs')
const mainRoutes = require('./routers/main-routes')

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Application routes
app.use(mainRoutes)

app.listen(port, () =>{
    console.log('Server is up on port ' + port + '.')
})