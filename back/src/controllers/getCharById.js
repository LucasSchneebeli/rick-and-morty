const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = (req, res) => {
    const { id } = req.params;
    axios(`${URL}/${id}`)
    .then((response) => response.data)
    .then((data) => {
        const character = {
            id: data.id, 
            image: data.image, 
            name: data.name, 
            gender: data.gender,
            species: data.species
        }
        res.status(200).json(character);
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
        
    })
}

module.exports = {
    getCharById
}

