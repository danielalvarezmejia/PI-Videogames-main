const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms: {
      type: DataTypes.STRING, //?????????????????
      allowNull: false,
    },
    backgroung_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING, //????????? o es con STRING???????
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL, //se debe poner limite??? ej. ...DECIMAL(10,2)
      allowNull: false
    }
  }, { timestamps: false });
};
