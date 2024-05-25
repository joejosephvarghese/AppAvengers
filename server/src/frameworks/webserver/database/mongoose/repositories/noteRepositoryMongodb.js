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
      const updateNote = async (jobId, updates) => {
        const updatedJob = await blogNoteEntity.updateBlog(jobId, updates);
        return updatedJob;
    }
    
    return {
        createBlogNote ,
        findAllNotes,
        updateNote
    
       
    }
}

export default BlogNoteRepositoryMongoDB