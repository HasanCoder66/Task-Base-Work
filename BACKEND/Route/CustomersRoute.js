import express from "express";
import {
  createCustomer
} from "../Controllers/CustomersController.js";

const customerRoutes = express.Router();

//======================= CREATE RESIDENTS ======================//
// http://localhost:8800/api/resident/
// residentRoutes.post("/", verifyAdmin, createResident);
customerRoutes.post("/create", createCustomer);

//======================= UPDATE RESIDENTS ======================//
// http://localhost:8800/api/resident/660b37d3da1211544662db30
// residentRoutes.put("/:residentId", verifyAdmin, updateResident);
// customerRoutes.put("/:residentId", updateResident);

//======================= DELETE RESIDENTS ======================//
// http://localhost:8800/api/resident/660b37d3da1211544662db30
// residentRoutes.delete("/:residentId", verifyAdmin, deleteResident);
// customerRoutes.delete("/:residentId", deleteResident);




export default customerRoutes;
