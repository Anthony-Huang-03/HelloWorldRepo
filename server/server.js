import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import victimRoutes from "./routes/victimRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", victimRoutes);
app.use("/api", heroRoutes);

mongoose.connect('mongodb://localhost:27017/HelloWorldRepo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.log("MongoDB error occurred.", err)
})

app.listen(port, () => console.log(`Listening on port ${port}`));