import express, { query } from 'express';
const db = require('./models');

/**
 * NOTE TO TEAM: CONTROLLER TO RESET/WIPE/DROP ALL TABLES FROM DB
 * -> QUERY HAS TO BE TWO SEPARATE ENTRIES & SECOND ENTRY IS REQUIRED
 * DROP SCHEMA public CASCADE;
 * CREATE SCHEMA public;
 */

// DECLARING DATA TYPES FOR ALL THE CONTROLLERS IN STRATOSCONTROLLER - WILL NEED TO ADD IF YOU ARE ADDING A NEW CONTROLLER
interface controllers {
  getResults: any;
  reset: any;
}

interface dataType {
  queryData: string;
  queryStatistics: string;
}

export const stratosController: controllers = {
  getResults: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // DECONSTRUCTURED VARIABLE DECLARACTION THAT WILL EXTRACT THE VALUE FROM REQ.BODY.SCHEMAENTRY
    const { schemaEntry } = req.body;

    // OBJECT DECLARATION THAT WILL HOLD OUR RESULTS FROM OUR DB.QUERY
    const newData: dataType = {
      queryData: '',
      queryStatistics: '',
    };

    // DB QUERY THAT WILL FETCH OUR RESULT BASED ON THE QUERY STRING
    db.query(schemaEntry)
      .then((queryData: any) => {
        // RE-ASSIGNING NEWDATA.QUERYDATA TO OUR RETURNED DB REQUESTED DATA
        newData.queryData = queryData.rows;

        console.log('queryData.rows: ', queryData.rows);

        // VARIABLE STORING THE NEW.DATA.QUERYSTATISTICS[0] (WHICH IS AN OBJECT) PROPERTY NAME BECAUSE OF TS COMPILE ERROR
        const queryPlan: any = 'QUERY PLAN';

        // RUNNING EXPLAIN BY PASSING IN A CONCANTENATED STRING OF EXPLAIN... AND THE SCHEMAENTRY QUERY STRING
        db.query('EXPLAIN (FORMAT JSON, ANALYZE) ' + schemaEntry)
          .then((queryStatistics: any) => {
            // RE-ASSIGNING OUR NEWDATA.QUERYSTATISTICS TO OUR RETURNED DATA ANALYTICS
            newData.queryStatistics = queryStatistics.rows;

            console.log(
              'Returned query stats: ',
              newData.queryStatistics[0][queryPlan]
            );

            return next();
          })
          .catch((error: string) => {
            console.log(
              'Error in Controllers > getResults > db.query > EXPLAIN: ',
              error
            );
          });

        // NEED TO SEND NEWDATA UNDER RES.LOCALS

        return next();
      })
      .catch((error: string) => {
        console.log(
          'Error in Controllers > getResults > db.query > SCHEMAENTRY: ',
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
    db.query('DROP SCHEMA public CASCADE;')
      .then((result: any) => {
        // REINSTATES TABLE SCHEMAS TO PUBLIC
        db.query('CREATE SCHEMA public;')
          .then((result: any) => {
            return next();
          })
          .catch((error: string) => {
            console.log(
              'Error in Controllers > reset > db.query > CREATE SCHEMA: ',
              error
            );
          });
      })
      .catch((error: string) => {
        console.log(
          'Error in Controllers > reset > db.query > DROP SCHEMA: ',
          error
        );
      });
  },
};
