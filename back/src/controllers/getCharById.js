const axios=require('axios');
const URL = "https://rickandmortyapi.com/api/character/";
/* En el caso de que salga todo OK, la ruta debe responder un JSON con la información del personaje.
Si hay un error debes responder con un status 500, y un JSON con la propiedad message de error */

const getCharById = (req,res) => {
    const {id} = req.params;
    axios.get(`${URL}${id}`).then(response => {
    const {id, name, species, image , gender} = response.data;
    res.status(200).json({id, name, species, image , gender})
    }).catch((error)=>{
        res.status(500).json({error: error.message})
    })
    
}

module.exports = getCharById;