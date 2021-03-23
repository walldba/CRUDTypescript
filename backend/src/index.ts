import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import productsRoutes from "./routes/productsRoutes";
import usersRoutes from "./routes/usersRoutes";


const app = express();
createConnection();

app.use(cors());
app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

app.listen(3333);
