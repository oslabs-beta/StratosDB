import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import { stratosController } from './controllers';
const { Pool } = require('pg');

// INITIALIZE CONFIGURATION
dotenv.config();

const app: express.Application = express();

interface queryResultObjType {
  queryStatistics: any;
  queryTable: any;
}

// FOR PRODUCTION
// INTERFACE FOR AWS INFORMATION
// interface awsTypes {
//   user: string;
//   host: string;
//   database: string;
//   password: string;
//   port: string;
// };

// OBJECT CONTAINING AWS INFO FROM THE FRONT END
let awsInfo: awsTypes = {
  user: '',
  host: '',
  database: '',
  password: '',
  port: '',
};

// FOR TESTING
interface awsTypes {
  user: any;
  host: any;
  database: any;
  password: any;
  port: any;
}

// let awsInfo: awsTypes = {
//   user: process.env.RDS_USER,
//   host: process.env.RDS_ENDPOINT,
//   database: process.env.RDS_DB_NAME,
//   password: process.env.RDS_PASSWORD,
//   port: process.env.RDS_PORT,
// }

// SETTING AWS INFO AS THE POOL INFORMATION
let pool: any;
// const pool = new Pool({
//   user: process.env.RDS_USER,
//   host: process.env.RDS_ENDPOINT,
//   database: process.env.RDS_DB_NAME,
//   password: process.env.RDS_PASSWORD,
//   port: process.env.RDS_PORT,
// });

// EXPORTING POOL QUERY METHOD
const db: any = {};

app.use(bodyParser.json());

const PORT = 3000;

// WHEN REFRESHED, THE APP WILL WIPE ANY EXISTING TABLES IN THE DB
app.get('/refresh', (req, res) => {
  awsInfo = {
    user: '',
    host: '',
    database: '',
    password: '',
    port: '',
  };
  pool = new Pool(awsInfo);
  db['query'] = (text: string, params?: any, callback?: any) => {
    return pool.query(text, params, callback);
  };
  console.log('refreshed: ', awsInfo);
  res.status(200).send('DATABASE HAS A CLEAN SLATE');
});

// CONNECTING TO AWS
app.post("/connect", (req, res) => {
  console.log("Incoming form information: ", req.body)
  awsInfo = {
    user: req.body.user,
    host: req.body.host,
    database: req.body.database,
    password: req.body.password,
    port: req.body.port,
  };
  pool = new Pool(awsInfo);
  db["query"] = (text: string, params?: any, callback?: any) => {
      return pool.query(text, params, callback);
    };
  
  console.log("HOOPLAH MAGIC: ", awsInfo, "We have connected!")
  res.status(200);
});
// PASSING AWS DATABASE INFORMATION INTO SERVER FROM STATE
app.post('/aws', (req, res) => {
  // assigning AWS info to awsInfo
  awsInfo = req.body.awsInfo;
  console.log('AWS info set: ', awsInfo);
  res.status(200).send('AWS info has been set');
});

// FRONTEND BUTTON THAT WILL ALLOW USER TO DROP ALL TABLES FROM DB
app.get('/reset', stratosController.reset, (req, res) => {
  res.status(200).send('DATABASE HAS BEEN RESET');
});

// SEND IMPORTED/INPUTTED SCHEMAS TO CLOUD DB
app.post('/newSchema', stratosController.createSchema, (req, res) => {
  // SENDING CLIENT STATUS FOR SCHEMA CREATION
  res.status(200).send('success');
});

// RUNNING TESTS ON THE SCHEMAS IN THE CLOUD
app.post(
  '/results',
  stratosController.queryTable,
  stratosController.runTest,
  (req, res) => {
    const queryResultObj: queryResultObjType = {
      queryStatistics: res.locals.explain,
      queryTable: res.locals.queryResult,
    };
    // SENDING CLIENT THE RESULTS FROM THE PERFORMANCE TEST
    res.status(200).send(queryResultObj);
  }
);

// LISTENING TO SERVER ON PORT 3000
app.listen(PORT, () => {
  console.log(`stratosDB server is running on port ${PORT}`);
});

export default db;
