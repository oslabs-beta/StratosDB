import express, { query } from "express";
const db = require("./server");

/**
 * NOTE TO TEAM: CONTROLLER TO RESET/WIPE/DROP ALL TABLES FROM DB
 * -> QUERY HAS TO BE TWO SEPARATE ENTRIES & SECOND ENTRY IS REQUIRED
 * DROP SCHEMA public CASCADE;
 * CREATE SCHEMA public;
 */

// DECLARING DATA TYPES FOR ALL THE CONTROLLERS IN STRATOSCONTROLLER - WILL NEED TO ADD IF YOU ARE ADDING A NEW CONTROLLER
interface controllers {
  createSchema: any;
  reset: any;
  runTest: any;
}

interface dataType {
  queryData: string;
  queryStatistics: string;
}

export const stratosController: controllers = {
  createSchema: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // DESTRUCTURING SCHEMAENTRY FROM REQ.BODY
    const { schemaEntry } = req.body;
    console.log("state: ", req.body.queryEntry);
    db.query(schemaEntry)
      .then((result: any) => {
        return next();
      })
      .catch((error: string) => {
        console.log(
          "Error in Controllers > createSchema > db.query > SCHEMA: "
        );
      });
  },

  runTest: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // THIS IS GOING TO BE DIFFERENT
    const { queryEntry } = req.body;

    // OBJECT DECLARATION THAT WILL HOLD OUR RESULTS FROM OUR DB.QUERY
    const newData: dataType = {
      queryData: "",
      queryStatistics: "",
    };

    // VARIABLE STORING THE NEW.DATA.QUERYSTATISTICS[0] (WHICH IS AN OBJECT) PROPERTY NAME BECAUSE OF TS COMPILE ERROR
    const queryPlan: any = "QUERY PLAN";

    console.log("schemaEntry: ", queryEntry);

    // RUNNING EXPLAIN BY PASSING IN A CONCANTENATED STRING OF EXPLAIN... AND THE SCHEMAENTRY QUERY STRING
    db.query("EXPLAIN (FORMAT JSON, ANALYZE) " + queryEntry)
      .then((queryStatistics: any) => {
        // RE-ASSIGNING OUR NEWDATA.QUERYSTATISTICS TO OUR RETURNED DATA ANALYTICS
        newData.queryStatistics = queryStatistics.rows[0][queryPlan]; // THIS NEEDS TO BE MORE SPECIFIC

        console.log("Returned query stats: ", newData.queryStatistics);

        // RETURN THE SPECIFIC RESULT
        res.locals.explain = newData.queryStatistics;
        return next();
      })
      .catch((error: string) => {
        console.log(
          "Error in Controllers > getResults > db.query > EXPLAIN: ",
          error
        );
      });
  },

  reset: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // DROPS ALL TABLES WITH SCHEMA SET TO PUBLIC
    db.query("DROP SCHEMA public CASCADE;")
      .then((result: any) => {
        // REINSTATES TABLE SCHEMAS TO PUBLIC
        db.query("CREATE SCHEMA public;")
          .then((result: any) => {
            return next();
          })
          .catch((error: string) => {
            console.log(
              "Error in Controllers > reset > db.query > CREATE SCHEMA: ",
              error
            );
          });
      })
      .catch((error: string) => {
        console.log(
          "Error in Controllers > reset > db.query > DROP SCHEMA: ",
          error
        );
      });
  },
};
