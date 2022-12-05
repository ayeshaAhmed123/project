import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { get, userRoutes } from './exports.js'

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5003;

const URI =
    "mongodb+srv://ayesha:1234@cluster0.xrhlbse.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`)))
    .catch((error) => console.log(error));

app.get('/', get)
app.use('/users', userRoutes);
