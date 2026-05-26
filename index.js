import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const DB_URI = `mongodb://localhost:27017/memories`;
const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

mongoose.connect(DB_URI).then(() => {
    app.listen(PORT, (err) => {
        console.log(`Server started on port ${PORT}`);
    });
}).catch((err) => {
    console.log(err.message);
});