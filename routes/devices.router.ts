// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Device from "../models/Device";

// Global Config
export const devicesRouter = express.Router();

devicesRouter.use(express.json());

// GET
devicesRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const devices = (await collections?.Device?.find({}).toArray()) as unknown as Device[];

        res.status(200).send(devices);
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        res.status(500).send(errorMessage);
    }
});


devicesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const device = (await collections?.Device?.findOne(query)) as unknown as Device;

        if (device) {
            res.status(200).send(device);
        }
    } catch (error) {

        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});


// POST

// PUT

// DELETE