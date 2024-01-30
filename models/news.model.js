import { Sequelize,DataTypes } from 'sequelize';
import { sequelize } from './DB.js';
const News = sequelize.define('News', {
  // Model attributes are defined here
  id:{
    type:DataTypes.STRING,
    primaryKey:true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull:false
  },
  category_id: {
    type: DataTypes.STRING
  },
  country_code: {
    type: DataTypes.STRING
  },
  createdAt :{
    type:DataTypes.DATE,
  },
  updatedt:{
    type:DataTypes.DATE
  }
}, {
    tableName:"news"
});

export default News;
