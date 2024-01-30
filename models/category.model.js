import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from './DB.js';

const Category = sequelize.define('Author', {
  // Model attributes are defined here
  id:{
    type:DataTypes.STRING,
    primaryKey:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
    tableName:"category"
});

export default Category;
