import express from "express";

const app = express();

console.log(process.env.DATABASE_URL);
console.log(process.env.PORT);

app.get("/", (req, res) => {
    res.json({
        db: process.env.DATABASE_URL
    })
})

app.listen(process.env.PORT);