import createBlogNote from "../app/repositories/useCases/blog/noteCruds.js";
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const blogNoteController = (
    blogNoteDbRepository,
    blogNoteDbRepositoryImpl,
    blogNoteModel
) => {
    const dbRepositoryBlogNote = blogNoteDbRepository(blogNoteDbRepositoryImpl(blogNoteModel));
    console.log(dbRepositoryBlogNote,"jjjj")
  
    const createNewBlogNote = async (req, res, next) => {
        try {
            const customReq = req;
            const blogNote = req.body;
            const authorId = new ObjectId(customReq.payload);
            blogNote.author = authorId;
            const createdBlogNote = await createBlogNote(blogNote, dbRepositoryBlogNote);
  
            if (!createdBlogNote) {
                throw new Error("Blog note creation failed");
            }
            res.json({
                status: "success",
                message: "Blog note created successfully",
                blogNote: createdBlogNote,
            });
        } catch (error) {
            next(error);
        }
    };
  
    return {
        createNewBlogNote,
    };
};
  
export default blogNoteController;
