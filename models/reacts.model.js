import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from './DB.js';

const React = sequelize.define('React', {
  // Model attributes are defined here
  id:{
    type:DataTypes.STRING,
    primaryKey:true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  news_id: {
    type: DataTypes.STRING
  },
  createdAt :{
    type:DataTypes.DATE,
  },
  updatedt:{
    type:DataTypes.DATE
  }
}, {
    tableName:"react"
  // Other model options go here
});

export default React;
