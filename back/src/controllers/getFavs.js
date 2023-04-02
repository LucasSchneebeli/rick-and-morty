const {Favorite, User} = require('../DB_connection');

const getFavs = async (req, res) => {
    
    const { idUser } = req.query;

    try {
        const favs = await Favorite.findAll({where: {id: iduser}});
        await fav.removeUser(idUser);

        res.status(200).json({favs});

    } catch (error)
{
    res.status(500).json({message: error})
}



}

module.exports = {getFavs}