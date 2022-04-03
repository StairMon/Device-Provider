import express, { Request, Response } from "express";
import { connectToDatabase } from "./services/database.service"
import { devicesRouter } from "./routes/devices.router";

const app = express();

const port = process.env.PORT || 3000;

connectToDatabase()
    .then(() => {
        app.use("/devices", devicesRouter);
 
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });