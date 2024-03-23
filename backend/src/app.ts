import express from 'express';
import helmet from 'helmet';
import parser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDb } from './database/connectoDb';
dotenv.config();
const portNumber = process.env.PORT || 3000;
const app = express();
connectToDb();
app.use(cors());
app.use(helmet());
app.use(parser.json());

app.listen(portNumber, () => {
  console.log(`connected to the port ${portNumber}`);
});
