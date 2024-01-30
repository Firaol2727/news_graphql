import News from "../models/news.model.js";
import Category  from "../models/category.model.js";
import Picture from "../models/picture.model.js";
import React from "../models/reacts.model.js";
import { v4 as uuidv4 } from 'uuid';
import e from "express";

// Generate a new UUID
const uuid = uuidv4();
const root = {
    getNews: async({ id }) => {
      return await News.findOne({
        where:{id:id},
        include:[React,Picture]
    })
    },
    getNewses: async() => {
      return News.findAll();
    },
    getNewsByCountryCode:async ({ code }) => {
      const newses =await News.findAll({
        where:{
            country_code:code
        },
        include:[Picture,React]
      });
      return newses;
    },
    getCategories: async() => {
      return await Category.findAll();
    },
    getReacts:async ({ news_id }) => {
      const reacts=await React.findAll({
        where:{news_id:news_id}
      })
      return reacts;
    },
    createReact:({type,news_id})=>{
        const uuid = uuidv4();
        return React.create({
            id:uuid,
            type:type,
            news_id:news_id
        })
    }
  };
export default root;