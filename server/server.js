// core modules and config
import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';
import winston from 'winston';

const app = express();
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.join(__dirname, '../public'))));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
winston.log('info', `Server started and listening on port ${PORT}`);
