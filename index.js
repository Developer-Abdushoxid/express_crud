import userRoutes from './component/user.js';
import express from 'express';
import bodyParser from 'body-parser'
const app = express();


app.use('/user',userRoutes)