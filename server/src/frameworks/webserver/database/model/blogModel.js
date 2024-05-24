import { Schema, model } from "mongoose";

const blogNoteSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide the title for the note"]
    },
    content: {
        type: String,
        required: [true, "Please provide the content for the note"]
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: [true, 'Please add authorId']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const BlogNote = model("BlogNote", blogNoteSchema, 'blogNotes');
