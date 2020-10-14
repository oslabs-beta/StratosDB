import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { stratosController } from "./controllers";
const { Pool } = require('pg');

const app: express.Application = express();

// INTERFACE FOR AWS INFORMATION
interface awsTypes {
  user: string;
  host: string;
  database: string;
  password: string;
  port: string;
};

// OBJECT CONTAINING AWS INFO FROM THE FRONT END
let awsInfo: awsTypes = {
  user: "",
  host: "",
  database: "",
  password: "",
  port: "",
};

// SETTING AWS INFO AS THE POOL INFORMATION
const pool = new Pool(awsInfo);

app.use(bodyParser.json());

const PORT = 3000;

// WHEN REFRESHED, THE APP WILL WIPE ANY EXISTING TABLES IN THE DB
app.get("/refresh", (req, res) => {
  awsInfo = {
    user: "",
    host: "",
    database: "",
    password: "",
    port: "",
  };;
  console.log("refreshed: ", awsInfo)
  res.status(200).send("DATABASE HAS A CLEAN SLATE");
});

// PASSING AWS DATABASE INFORMATION INTO SERVER FROM STATE
app.post("/aws", (req, res) => {
  // assigning AWS info to awsInfo
  awsInfo = req.body.awsInfo;
  console.log("AWS info set: ", awsInfo);
  res.status(200).send("AWS info has been set")
})

// FRONTEND BUTTON THAT WILL ALLOW USER TO DROP ALL TABLES FROM DB
app.get("/reset", stratosController.reset, (req, res) => {
  res.status(200).send("DATABASE HAS BEEN RESET");
});

// SEND IMPORTED/INPUTTED SCHEMAS TO CLOUD DB
app.post("/newSchema", stratosController.createSchema, (req, res) => {
  // SENDING CLIENT STATUS FOR SCHEMA CREATION
  res.status(200).send("success");
});

// RUNNING TESTS ON THE SCHEMAS IN THE CLOUD
app.post("/results", stratosController.runTest, (req, res) => {
  // SENDING CLIENT THE RESULTS FROM THE PERFORMANCE TEST
  res.status(200).send(res.locals.explain);
});

// LISTENING TO SERVER ON PORT 3000
app.listen(PORT, () => {
  console.log(`stratosDB server is running on port ${PORT}`);
});

// EXPORTING POOL QUERY METHOD
module.exports = {
  query: (text: string, params: any, callback: any) => {
    return pool.query(text, params, callback);
  },
};
