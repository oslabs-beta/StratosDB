import express from 'express';
// NEED TO IMPORT DB FROM MODELS (HAVEN'T DUE TO TS COMPILE ERROR)
const db = require('./models');

// DECLARING DATA TYPES FOR ALL THE CONTROLLERS IN STRATOSCONTROLLER
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
    console.log('in getResults');
    const { schemaEntry } = req.body;
    // console.log('REQ.BODY: ', req.body);
    // console.log('SCHEMAENTRY: ', schemaEntry);
    const newData: dataType = {
      queryData: '',
      queryStatistics: '',
    };

    db.query(schemaEntry)
      .then((result: any) => {
        console.log('RESULT: ', result);
      })
      .then((queryData: any) => {
        newData.queryData = queryData.rows;

        console.log('queryData.rows: ', queryData.rows);

        // Running Explain for tests
        db.query('EXPLAIN (FORMAT JSON, ANALYZE) ' + schemaEntry).then(
          (queryStatistics: any) => {
            newData.queryStatistics = queryStatistics.rows;
            console.log('Returned query stats: ', newData.queryStatistics);
          }
        );
      })
      .catch((error: string) => {
        console.log(
          'Error in Controllers getResults Query Entry and Analysis: ',
          error
        );
      });
    return next();
  },
};
