import express from "express";

const app = express();

app.get('/', (req, res) =>
{
    return res.send("Auuuu");
});

app.listen(3333);
