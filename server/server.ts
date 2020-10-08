import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import { stratosController } from './controllers';

const app: express.Application = express();

app.use(bodyParser.json());

// INITIALIZE CONFIGURATION
dotenv.config();

const PORT = process.env.SERVER_PORT;

// WHEN REFRESHED, THE APP WILL WIPE ANY EXISTING TABLES IN THE DB
app.get('/', stratosController.reset, (req, res) => {
  res.status(200).send('DATABASE HAS A CLEAN SLATE');
});

// FRONTEND BUTTON THAT WILL ALLOW USER TO DROP ALL TABLES FROM DB
app.get('/reset', stratosController.reset, (req, res) => {
  res.status(200).send('DATABASE HAS BEEN RESET');
});

// SEND IMPORTED/INPUTTED SCHEMAS TO CLOUD DB
app.post('/results', stratosController.getResults, (req, res) => {
  // SENDING CLIENT THE RESULTS FROM THE PERFORMANCE TEST
  res.status(200).send('success');
});

// LISTENING TO SERVER ON PORT 3000
app.listen(PORT, () => {
  console.log(`stratosDB server is running on port ${PORT}`);
});
