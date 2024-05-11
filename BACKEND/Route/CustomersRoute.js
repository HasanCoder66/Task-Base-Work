import express from "express";
import {
  createCustomer,
  updateCustomer,
  deleteCustomer
} from "../Controllers/CustomersController.js";

const customerRoutes = express.Router();


//======================= CREATE CUSTOMER ======================//
// http://localhost:5000/api/customer/
customerRoutes.post("/create", createCustomer);



//======================= UPDATE CUSTOMER ======================//
// http://localhost:5000/api/customer/:customerId
customerRoutes.put("/:customerId", updateCustomer);



//======================= DELETE CUSTOMER ======================//
// http://localhost:5000/api/customer/:customerId
customerRoutes.delete("/:customerId", deleteCustomer);




export default customerRoutes;
