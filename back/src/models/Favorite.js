const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true, 

      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      sepcies: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender: {
         type: DataTypes.ENUM('Female','Male','Genderless', 'unkown'),
      },
      imagen: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: false,
      },
      origin: {
         type: DataTypes.STRING, 
         allowNull: false,
      }, 


   }, { timestamps: false, tableName: 'favorites'});
};
