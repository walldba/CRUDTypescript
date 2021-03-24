import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/UsersRoutes";
import authorsRoutes from "./routes/AuthorsRoutes";
import booksRoutes from "./routes/BooksRoutes";


const app = express();
createConnection();

app.use(cors());
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/authors', authorsRoutes);
app.use('/books', booksRoutes);

app.listen(3333);
