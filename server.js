import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js';

const app = express();

const port = process.env.PORT || 4000;
connectDB();

const allowOrigins = ['http://localhost:5173']

//Request passed in json (postman thi jyare body thi data mokli e mate!!)
//Cors is used to connect frontend & backend
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:allowOrigins,
  credentials: true,
}));

// app.get('/', (req, res) => {
//   res.send('Welcome to the server!');
// })

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});

