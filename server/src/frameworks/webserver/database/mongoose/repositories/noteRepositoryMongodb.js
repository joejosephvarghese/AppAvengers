import BlogNoteEntity from "../../../../../entities/noteEntity.js";
import { BlogNote } from "../../model/blogModel.js";

export const BlogNoteRepositoryMongoDB = (model) => {
    const blogNoteEntity = new BlogNoteEntity(model);

    const createBlogNote = async (blogNote) => {
        const newBlogNote = await blogNoteEntity.createBlogNote(blogNote);
        return newBlogNote;
    };

    const findAllNotes = async () => {
        const allNotes = await blogNoteEntity.getAllNotes();
        return allNotes;
      };
      
    
    return {
        createBlogNote ,
        findAllNotes
    
       
    }
}

export default BlogNoteRepositoryMongoDB