import mongoose from "mongoose";
import { Schema } from "mongoose";

const CustomersSchema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Customer", CustomersSchema);


