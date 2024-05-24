




export const blogNoteDbRepository = (repository) => {
    const createBlogNote = async (blogNote) => {
        const newBlogNote = await repository.createBlogNote(blogNote);
        return newBlogNote;
    };


    return {
        createBlogNote,
       
    }
}
export default blogNoteDbRepository