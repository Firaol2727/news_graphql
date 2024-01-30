import sql from 'sequelize';
const {Sequelize,DataTypes}=sql;
export const sequelize = new Sequelize('news_graphql', 'root', 'root', {
    dialect: 'mysql',
    dialectOptions: {
      connectTimeout: 2000
    }
  });