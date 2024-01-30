import Category from "../models/category.model";
import async from 'async';
import { v4 as uuidv4 } from "uuid";
export class CategoryService{
    static async createCategory(
        name
      ) { 
        async.waterfall([
            function(callback) {
                const id=uuidv4();
              Category.create({
                id:id,
                name:request.body.name
              })
              .then(data=>{
                 callback(null,data);
              })
              .catch(err=>{
                callback(err);
              })
            }
          ], function(err, result) {
            if (err) {
              console.error(err);
            } else {
              console.log('All tasks completed');
              console.log('Final result:', result);
              return result;
            }
          });
      }
    static async getCategory(
    ) { 
        async.waterfall([
            (callback)=>{
              Category.findAll()
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
    static async deleteCategory(
        id
    ) { 
        async.waterfall([
            (callback)=>{
              Category.destroy({
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