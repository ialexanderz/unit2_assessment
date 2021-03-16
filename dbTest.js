const models = require('./models')

const makeAnimal = async () => {
    models.animal.create({
        species_name: 'African spurred tortoise',
        scientific_name: 'Centrochelys sulcata',
        image_url: 'https://images.unsplash.com/photo-1565016592843-12e120c39b67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description: 'Sulcata tortoise grow to an average weight of 80 - 150lbs',
        extinct: true
    })
}

makeAnimal()