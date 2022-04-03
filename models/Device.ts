import { ObjectId } from "mongodb";

export default class Device  {
    constructor(public BUILDING_NUMBER: number, public DEVICE_NUMBER: number, public APTMANAGERPHONE: string, public EMERGENCYPHONE: string, public id?: ObjectId) {}
}