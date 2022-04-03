// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { Device?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING ?? '');
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME ?? '');
   
    const devicesCollection: mongoDB.Collection = db.collection(process.env.DEVICE_COLLECTION_NAME ?? '');
 
  collections.Device = devicesCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${devicesCollection.collectionName}`);
 }
