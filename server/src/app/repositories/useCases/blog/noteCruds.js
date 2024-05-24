

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



export default createBlogNote