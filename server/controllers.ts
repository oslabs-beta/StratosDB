import express, { query } from 'express';
const db = require('./models');

// DECLARING DATA TYPES FOR ALL THE CONTROLLERS IN STRATOSCONTROLLER - WILL NEED TO ADD IF YOU ARE ADDING A NEW CONTROLLER
interface controllers {
  getResults: any;
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
};
