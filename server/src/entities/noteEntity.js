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
    
}

export default BlogNoteEntity;