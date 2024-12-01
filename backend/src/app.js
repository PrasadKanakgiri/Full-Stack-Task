import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
        origin: process.env.CORS_ORIGIN
    }
))

app.use(express.json(({limit:"16kb"}))) // this is used to accpept data in json format 
app.use(express.urlencoded({extended: true, limit:"16kb"}))  // this is used to accept data in url format
app.use(express.static("public"))  // this is used to store files in image, pdf format
app.use(cookieParser())

import taskRouter from './routes/task.routes.js'

app.use("/api/v1/tasks", taskRouter)


export {app}