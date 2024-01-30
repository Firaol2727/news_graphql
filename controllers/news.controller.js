import { FilesPathResolver } from "../helpers/FileUpload.js";
import Picture from "../models/picture.model.js";
import { NewsService } from "../services/news.service.js";
import { v4 as uuidv4 } from "uuid";
export class NewsController{
    static async createNews(
        request,
        response,
        next
    ){
        console.log("request files ",request.files)
        const files=FilesPathResolver(request.files);
        console.log("files",files);
        NewsService.createNews(
            request.body.title,request.body.content,
            request.body.category_id,request.body.country_code,
            files
        ).then((data)=>{
            response.send(data);
        })
        .catch((err)=>{
            next(err);
        })
    }
}