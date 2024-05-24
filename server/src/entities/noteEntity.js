export class BlogNoteEntity {
    constructor(model) {
      this.model = model;
    }
  
    async createBlogNote(blogNote) {
      const newBlogNote = await this.model.create(blogNote);
      return newBlogNote;
    }
}

export default BlogNoteEntity;