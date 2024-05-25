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
    
    
}

export default BlogNoteEntity;