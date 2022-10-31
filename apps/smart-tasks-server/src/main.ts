import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cors from 'cors';

import * as routes from './app/routes';

import { smartDB } from '@repo-hubs/smart-tasks-lib';
import { errorHandler } from '@repo-hubs/smart-tasks-lib';
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(errorHandler);

app.use('', routes.business);
app.use('', routes.users);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to agile-app-server!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  smartDB();
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
