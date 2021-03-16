'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  animal.init({
    species_name: DataTypes.STRING,
    scientific_name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    description: DataTypes.TEXT,
    exctinct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'animal',
  });
  return animal;
};