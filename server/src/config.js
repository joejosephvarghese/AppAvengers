import dotenv from 'dotenv';
dotenv.config();

const configKeys = {
    MONGO_DB_URL: process.env.DATABASE,
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
};

export default configKeys;
