import mongoose from 'mongoose'
import configKeys from '../../../../config.js'


const connectDB =async()=>{
    try{
        await mongoose.connect(configKeys.MONGO_DB_URL,{
          dbName:configKeys.DB_NAME,
        })
        console.log("database connected successfully")
    } catch (error) {
        process.exit(1);
      }
    };
    export default connectDB;
