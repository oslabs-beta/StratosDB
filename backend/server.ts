import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

// TESTING TO MAKE SURE ROUTE IS WORKING - VERIFIED!
app.get('/test', (req, res) => {
  res.send('Hello World!');
});

// LISTENING TO SERVER ON PORT 3000
app.listen(3000, () => {
  console.log('stratosDB server is running on port 3000');
});
