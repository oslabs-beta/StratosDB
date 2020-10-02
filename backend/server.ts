// IMPORTING REQUEST & RESPONSE TO ASSIGN AS TYPES FOR req & res PARAMETERS
import { Request, Response } from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// LISTENING TO SERVER ON PORT 3000
app.listen(3000, () => {
  console.log('stratosDB server is running on port 3000');
});
