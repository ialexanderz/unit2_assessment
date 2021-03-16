// Required Modules
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')
const ejsLayouts = require('express-ejs-layouts')

// Variables
const app = express();
const rowdyResults = rowdy.begin(app)

// Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false }))



// Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/favorites', async (req, res) => {
    try {
        const animals = await db.animal.findAll()
        res.render('favorites', {animals})
        

    } catch (err) {
        console.log(err)
    }
})

app.get('/favorites/new', (req, res) => {
    try{ 
        res.render('form')
    } catch (err) {
        console.log(err)
    }
})

app.post('/favorites', async (req, res) => {
    try {
        const newAnimal = await db.animal.findOrCreate({
            where: {
                species_name: req.body.species_name,
                scientific_name: req.body.scientific_name,
                image_url: req.body.image_url,
                description: req.body.description,
                exctinct: req.body.exctinct
            }
        })
        res.redirect('/favorites');
    } catch (err) {
        console.log(err)
    } 
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    rowdyResults.print()
    // console.log(`Server is listening on port ${PORT}`)
})
