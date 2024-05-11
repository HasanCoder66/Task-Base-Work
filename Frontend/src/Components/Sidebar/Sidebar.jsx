import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {Person2Icon , AssignmentIndIcon} from '@mui/icons-material';
// import AssignmentIndIcon from '@mui/icons-material/';

import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Slices/authSlice";
import Center from "../center/Center";
function Sidebar() {
  const { user, isLoading, error } = useSelector((state) => state.auth);
  // console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandlerWithMongoDb = () => {
    console.log("logout handler is working ");
    dispatch(logout());
    toast.success("user Logout Successfuly");
    navigate("/login");
    //   window.location.href = "/login";
  };
  return (
    <>
      <div className="mainDiv ">
        <div className="sideBar bg-green-950">
          <div className="sideBarWrapper">
            <button className=" logo text-white">LOGO</button>

            <button className="sideBarButton mt-10 text-white bg-green-800 font-bold w-[150px] rounded-sm p-5">CUSTOMERS</button>
          </div>
        </div>

        <Center />
      </div>
    </>
  );
}

export default Sidebar;
