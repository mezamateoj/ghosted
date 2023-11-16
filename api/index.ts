import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

import jobsRoutes from './src/routes/jobsRoutes';
import userClerkWebHook from './src/webhooks/users';

const port = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
	res.send('Welcome to Express & TypeScript Ghosted Server v4.');
});

app.use('/api/client', userClerkWebHook);

app.use('/api/jobs', jobsRoutes);

app.listen(port, () => {
	console.log(`Server v4 is listening`);
});
