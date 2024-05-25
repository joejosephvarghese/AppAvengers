import {createBlogNote,findAllNotes,updateNoteFunction} from "../app/repositories/useCases/blog/noteCruds.js";
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const blogNoteController = (
    blogNoteDbRepository,
    blogNoteDbRepositoryImpl,
    blogNoteModel
) => {
    const dbRepositoryBlogNote = blogNoteDbRepository(blogNoteDbRepositoryImpl(blogNoteModel));
  
  
    const createNewBlogNote = async (req, res, next) => {
        try {
            const customReq = req;
            const blogNote = req.body;
            console.log(blogNote)
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

    const getAllNotes = async (req, res, next) => {
        console.log("here")
        try {
          const notes = await findAllNotes(dbRepositoryBlogNote);
          res.json({status: 'success', notes});
        } catch (error) {
          next(error);
        }
      };
           



      const updateNote = async (req, res) => {
        console.log(req.params,"jjj")
        const noteId = req.params.noteId;
      
        const update = req.body;
        
       console.log(update,"opp");
    
        if (!noteId) {
            return res.status(400).json({ error: "Note ID is required" });
        }
    
        try {
            const updatedNote = await updateNoteFunction(update, noteId, dbRepositoryBlogNote);
            
            if (!updatedNote) {
                return res.status(404).json({ error: "Note not found" });
            }
    
            return res.json({
                status: "success",
                message: "Note updated successfully",
                note: updatedNote,
            });
        } catch (error) {
            console.error("Error updating note:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };
      
    
    
  
    
  
    return {
        createNewBlogNote,
        getAllNotes,
        updateNote
      
    };
};
  
export default blogNoteController;
