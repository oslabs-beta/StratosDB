import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';

const app: express.Application = express();

// INITIALIZE CONFIGURATION
dotenv.config();

const PORT = process.env.SERVER_PORT;

// SEND IMPORTED/INPUTTED SCHEMAS TO CLOUD DB
app.post('/results', (req, res) => {
  // SENDING CLIENT THE RESULTS FROM THE PERFORMANCE TEST
});

// TESTING TO MAKE SURE ROUTE IS WORKING - VERIFIED!
app.get('/test', (req, res) => {
  res.send('Hello World!');
});

// LISTENING TO SERVER ON PORT 3000
app.listen(PORT, () => {
  console.log('stratosDB server is running on port 3000');
});
