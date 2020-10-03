import express from 'express';

// DECLARING DATA TYPES FOR ALL THE CONTROLLERS IN STRATOSCONTROLLER
interface controllers {
  getResults: any;
}

export const stratosController: controllers = {
  getResults: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {},
};
