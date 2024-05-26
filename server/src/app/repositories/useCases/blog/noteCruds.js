

export const createBlogNote = async (blogNote, blogNoteRepository) => {
  console.log(blogNoteRepository,"okkk")
  try {
    const result = await blogNoteRepository.createBlogNote(blogNote);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create blog note");
  }
};


export const findAllNotes = async (blogNoteRepository) => {
  console.log("here 2")
  try {
    const allNotes = await blogNoteRepository.findAllNotes();
    return allNotes;
  } catch (error) {
    throw new Error("Failed to get the notes");
  }
};


export const updateNoteFunction = async (note, noteId, blogNoteRepository) => {
  try {
    const updatedNote = await blogNoteRepository.updateNote(noteId, note);
    return updatedNote;
  } catch (error) {
    throw new Error("Failed to update the note");
  }
};




export const deleteNote = async (noteId,blogNoteRepository) => {
  
 
  try {
    await blogNoteRepository.deleteNote(noteId);
  } catch (error) {
    throw new Error("Failed to delete the note");
  }
};








// export default createBlogNote