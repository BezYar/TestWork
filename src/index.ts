import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import { initDb } from './services/db';

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
     swaggerOptions: {
        docExpansions: "none",
        persistAuthorization: true
     }
  })
);
app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;

initDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
