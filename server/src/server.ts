import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Needed for working with __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(routes);

// ✅ Serve React static files
app.use(express.static(path.join(__dirname, '../../client/dist')));

// ✅ Catch-all route for React Router
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Sequelize sync
const forceDatabaseRefresh = false;

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
});