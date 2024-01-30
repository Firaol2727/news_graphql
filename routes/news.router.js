import {Router} from "express";
import { upload } from "../helpers/FileUpload.js";
import { NewsController } from "../controllers/news.controller.js";

let router=Router();

router.post("/createnews",
    upload.array("images",6),
    NewsController.createNews
)
export default router;