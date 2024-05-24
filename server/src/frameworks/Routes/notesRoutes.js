import express from "express";
import blogNoteController from "../../controller/noteCotroller.js";
import blogNoteDbRepository from "../../app/repositories/blogNoteDbrepository.js";
import BlogNoteRepositoryMongoDB from "../webserver/database/mongoose/repositories/noteRepositoryMongodb.js";
import { BlogNote } from "../webserver/database/model/blogModel.js";




const blogNoteRouter = () => {
    const route = express.Router();

    const controller = blogNoteController(
        blogNoteDbRepository,
        BlogNoteRepositoryMongoDB,
        BlogNote
    );
     
   

    route.post('/create-note',controller.createNewBlogNote);
    route.get('/get-note',controller.getAllNotes)

    return route;
};

export default blogNoteRouter;
