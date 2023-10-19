import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();

import userRoutes from './src/routes/userRoutes';

const port = process.env.PORT || 8000;

const app: Application = express();

//For env File
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
	res.send('Welcome to Express & TypeScript Server');
});

app.use('/users', userRoutes);

app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});
