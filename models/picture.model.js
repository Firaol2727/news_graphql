import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from './DB.js';

const Picture = sequelize.define('Picture', {
  // Model attributes are defined here
  id:{
    type:DataTypes.STRING,
    primaryKey:true
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING
  },
  news_id:{
    type:DataTypes.STRING
  },
  createdAt :{
    type:DataTypes.DATE,
  },
  updatedt:{
    type:DataTypes.DATE
  }
}, {
    tableName:"picture"
  // Other model options go here
});

export default Picture;
