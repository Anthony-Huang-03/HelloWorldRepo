import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import victimRoutes from "./routes/victimRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", victimRoutes);

mongoose.connect('mongodb://localhost:27017/HelloWorldRepo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.log("MongoDB error occurred.", err)
})

app.listen(port, () => console.log(`Listening on port ${port}`));