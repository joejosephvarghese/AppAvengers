export class BlogNoteEntity {
    constructor(model) {
      this.model = model;
    }
  
    async createBlogNote(blogNote) {
      const newBlogNote = await this.model.create(blogNote);
      return newBlogNote;
    }

     async getAllNotes() {
      const allNotes = await this.model.find();
      return allNotes;
    }

     async updateBlog(blogId, updates) {
      const existingBlog = await this.model.findById(blogId);
      if (!existingBlog) {
        return null;
      }
      Object.assign(existingBlog, updates);
      const updatedBlog = await existingBlog.save();
      return updatedBlog;
    }
    
     async deleteBlog(noteId) {

      const note = await this.model.findById(noteId);
      if (!note) throw new Error("Note not found");
      await this.model.findByIdAndDelete(noteId);
    }
    
    
}

export default BlogNoteEntity;