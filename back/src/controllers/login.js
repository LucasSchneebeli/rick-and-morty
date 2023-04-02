const {User} = require('../DB_connection');

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        if(!email || !password){
            return res.status(400).json({message: 'Faltan datos'})
        }
       const user = await User.findOne({
        where: {email},
            
       });
            
     if (!user) {
        return res.status(404).json({message: "Usuario no enncontrado"})
     }
     user.password === password ? res.status(200).json({access: true, id: user.id}) : res.status(403).json({message: "Contrasenia incorrecta"})


        res.status(200).json(user);

    }
    catch (error) {
        
        res.status(500).send({message: error})
    }
}

module.exports = {
    login
}