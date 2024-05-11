import Customers from "../Model/CustomersModel.js";
//====================  NEW CUSTOMERS =========================//
// http://localhost:5000/api/create/
export const createCustomer = async (req, res, next) => {
  // console.log(req)

  const newCustomer = new Customers({
    ...req.body,
    
  });
  try {
    const saveCustomer = await newCustomer.save();
    res.status(200).send({
      status: "Successful",
      message: "Customer Added Successfully",
      data: saveCustomer,
    });
  } catch (error) {
    next(error);
  }
};

// //UPDATE RESIDENT
// http://localhost:8800/api/resident/660b37d3da1211544662db30
export const updateResident = async (req, res, next) => {
  try {
    const updateResident = await Customers.findByIdAndUpdate(
      req.params.residentId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({
      status: "Successful",
      message: "Resident Updated Successfully",
      data: updateResident,
    });
  } catch (error) {
    next(error);
  }
};

// //DELETE RESIDENT
// http://localhost:8800/api/resident/660b37d3da1211544662db30

export const deleteResident = async (req, res, next) => {
  try {
    await Customers.findByIdAndDelete(req.params.residentId);
    res.status(200).send({
      status: "Successful",
      message: "Resident deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// //GET RESIDENT
// http://localhost:8800/api/resident/find/660b413793cbd11706eb9a32

export const getResident = async (req, res, next) => {
  try {
    const resident = await Customers.findById(req.params.residentId);
    !resident &&
      res.status(404).send({
        status: "Failed",
        message: "Resident not found",
      });
    res.status(200).send({
      status: "Successful",
      message: "Resident Found",
      data: resident,
    });
  } catch (error) {
    next(error);
  }
};

//GET ALL RESIDENTS
// http://localhost:8800/api/resident/find/
export const getAllResidents = async (req, res, next) => {
  try {
    // Database query to retrieve all residents
    const residents = await Customers.find();

    // Sending the retrieved residents as response
    res.status(200).json({
      status: "Success",
      message: "All residents retrieved successfully",
      data: residents,
    });
  } catch (error) {
    // Handling errors
    console.error("Error while retrieving residents:", error);
    res.status(500).json({
      status: "Error",
      message: "Failed to retrieve residents",
      error: error.message,
    });
  }
};

//SEARCH RESIDENTS
// http://localhost:8800/api/resident/search/

export const searchResidents = async (req, res, next) => {
  const { residentName } = req.query;
  const queryObject = {};

  if (residentName) {
    queryObject.residentName = residentName;
    console.log(queryObject);
  }

  try {
    const searchRes = await Customers.find({
      residentName: { $regex: residentName, $options: "i" },
    }).limit(40); // Use queryObject instead of req.query

    // const searchRes = await Resident.find(queryObject); // Use queryObject instead of req.query
    console.log(searchRes);

    if (searchRes.length > 0) {
      // Check if searchRes contains any data
      res.status(200).json({
        message: "Resident found",
        data: searchRes,
      });
    } else {
      res.status(404).json({
        // Change status code to 404 for "Not Found"
        message: "Resident not found",
        status: "failed",
      });
    }
  } catch (error) {
    console.error("Error searching residents:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
