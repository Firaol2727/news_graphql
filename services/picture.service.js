import News from '../models/news.model';
import React from '../models/reacts.model';
import Picture from '../models/picture.model';
import async from 'async';
import { v4 as uuidv4 } from "uuid";
export class PictureService{
    static async createPicture(
          path,
          type,
          news_id,
      ) { 
        async.waterfall([
            function(callback) {
                const id=uuidv4();
              Picture.create({
                id:id,
                path:path,
                type:type,
                news_id:news_id,
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
}