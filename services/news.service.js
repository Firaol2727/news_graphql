import  News  from '../models/news.model.js';
import  React  from '../models/reacts.model.js';
import  Category  from '../models/category.model.js';
import  Picture  from '../models/picture.model.js';
import async, { reject } from 'async';
import { v4 as uuidv4 } from "uuid";
import { resolve } from 'path';
export class NewsService{
    static async createNews(
          title,
          content,
          category_id,
          country_code,
          files
      ) { 
        return new Promise((resolve,reject)=>{
          async.waterfall([
            function(callback) {
                const id=uuidv4();
              News.create({
                id:id,
                title:title,
                content:content,
                category_id:category_id,
                country_code:country_code,
              })
              .then(data=>{
                 callback(null,data);
              })
              .catch(err=>{
                callback(err);
              })
            },
            async function(news,callback) {
              console.log("news", news.title);
                files.forEach(async (file) => {
                  console.log("picture ",file)
                  await Picture.create({
                    id:uuidv4(),
                    path:file,
                    news_id:news.id
                  })
                });
              resolve(news)
          }
          ], function(err, result) {
            if (err) {
              console.error(err);
              reject(err);
            } else {
             
            }
          });
        })
        
      }
    static async getNewses(
    ) { 
        async.waterfall([
            (callback)=>{
              News.findAll({
                include:[React,Picture]
              })
              .then(data=>{
                 callback(null,data);
              })
              .catch(err=>{
                callback(err);
              })
            }
          ], (err, result) =>{
            if (err) {
              console.error(err);
            } else {
              return result;
            }
          });
    }
    static async getNew( id
        ) { 
            async.waterfall([
                (callback)=>{
                    News.findOne({
                        where:{id:id},
                        include:[React,Picture]
                    })
                  .then(data=>{
                     callback(null,data);
                  })
                  .catch(err=>{
                    callback(err);
                  })
                }
              ], (err, result) =>{
                if (err) {
                  console.error(err);
                } else {
                  return result;
                }
              });
        }
    static async deleteNews(
        id
    ) { 
        async.waterfall([
            (callback)=>{
              News.destroy({
                where:{id:id}
              })
              .then(data=>{
                 callback(null,data);
              })
              .catch(err=>{
                callback(err);
              })
            }
          ], (err, result) =>{
            if (err) {
              console.error(err);
            } else {
              console.log('All tasks completed');
              console.log('Final result:', result);
              return result;
            }
          });
    }
}