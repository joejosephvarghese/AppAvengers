import express from "express";
import blogNoteRouter from "./notesRoutes.js";

const routes = (app) => {
    app.use('/api/notes', blogNoteRouter());
}

export default routes;
