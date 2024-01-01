import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

import jobsRoutes from './src/routes/jobsRoutes';
import userClerkWebHook from './src/webhooks/users';
import userRoutes from './src/routes/userRoutes';

export const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
	res.send('Welcome to Express & TypeScript Ghosted Server v5.');
});

app.use('/api/client', userClerkWebHook);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobsRoutes);

