import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import customerRoutes from "./Route/CustomersRoute.js";
// import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;
app.use(express.json());
// app.use(cors());

app.use('/api/customer', customerRoutes)

// SERVER LISTENING ON THE PORT
app.listen(PORT, () => {
  BackendConnect();
  console.log(`Server listening on this ${process.env.PORT}`);
});



const BackendConnect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("BackEnd Connected");
    })
    .catch((error) => {
      throw error;
    });
};


//Error middleware
// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   const errorStack = err.stack || "No stack trace available"; // Added to handle cases where stack trace is not provided

//   // Log error to console for debugging purposes
//   console.error("Error:", errorMessage);
//   console.error("Stack trace:", errorStack);

//   // Return error response to client
//   return res.status(errorStatus).send({
//     status: "failed", // Corrected spelling
//     errorStatus: errorStatus,
//     message: errorMessage,
//     stack: errorStack,
//   });
// });
