
export const blogNoteDbRepository = (repository) => {


    const createBlogNote = async (blogNote) => {
        const newBlogNote = await repository.createBlogNote(blogNote);
        return newBlogNote;
    };


    const findAllNotes = async () => {
        try {
          const allNotes = await repository.findAllNotes();
          return allNotes;
        } catch (error) {
          throw new Error("Failed to get the notes");
        }
      };
      
      const updateNote = async (noteId, note) => {
        const updatedJob = await repository.updateNote(noteId, note);
        return updatedJob;
    };
    

    const deleteNote = async (noteId) => {

      try {
        await repository.deleteNote(noteId);
      } catch (error) {
        throw new Error("Failed to delete the note");
      }
    };
    

    return {
        createBlogNote,
        findAllNotes,
        updateNote,
        deleteNote
       
    }
}
export default blogNoteDbRepository