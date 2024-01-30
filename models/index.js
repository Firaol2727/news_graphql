
import { sequelize } from './DB.js';
import News from "./news.model.js";
import Picture from "./picture.model.js";
import Category from "./category.model.js";
import React from "./reacts.model.js";
import { v4 as uuidv4 } from 'uuid';
const DatabaseRelationInitialize=()=>{
    News.belongsTo(Category,{foreignKey:"category_id"});
    Category.hasMany(News, {foreignKey: 'category_id'});
    News.hasMany(Picture,{foreignKey:"news_id"});
    Picture.belongsTo(News,{foreignKey:"news_id"})
    News.hasMany(React,{foreignKey:"news_id"});
    React.belongsTo(News,{foreignKey:"news_id"})
}
export const DatabaseStart =async()=>{
    DatabaseRelationInitialize();
    sequelize.sync({alter:true})
    .then(async()=>{
        // Category.bulkCreate([
        //     {id:uuidv4(),name:"sport"},
        //     {id:uuidv4(),name:"music"}
        // ])
        console.log("Database Connection")
    })
    .catch((err)=>{
        console.log("Error",err)
    })
}
export {News,React,Category,Picture}