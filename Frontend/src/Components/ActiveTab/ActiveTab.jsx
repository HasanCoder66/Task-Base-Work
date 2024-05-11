import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import "./active.css";
import { blue, deepOrange, deepPurple } from "@mui/material/colors";
import { Person, AccountBox, PersonAdd } from "@mui/icons-material";

import { Link } from "react-router-dom";

const ActiveTab = ({ type }) => {
  return (
    <div className="d-flex">
      <>
        <Link to="/addCustomer">
          <button className=" mt-8 text-white bg-green-800 font-bold w-[250px] rounded-sm p-5 ml-10"><span className="text-2xl"> + </span> ADD NEW CUSTOMERS</button>
        </Link>{" "}
      </>
    </div>
  );
};

const Student = () => {
  return (
    <div style={{ margin: 10, display: "flex", alignItems: "center" }}>
      {/* <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: "#6B6B83", width: 100, height: 100 }}>
          <Person className="itemIcon" sx={{ fontSize: 40 }} />
        </Avatar>
      </Stack> */}
      <h1 style={{ color: "black", marginLeft: 20 }}>Students</h1>
    </div>
  );
};
// const AttendanceTitle = () => {
//   return (
//     <div style={{ margin: 10, display: "flex", alignItems: "center" }}>
//       <Stack direction="row" spacing={2}>
//         <Avatar sx={{ bgcolor: "#6B6B83", width: 100, height: 100 }}>
//           <Person className="itemIcon" sx={{ fontSize: 40 }} />
//         </Avatar>
//       </Stack>
//       <h1 style={{ color: "black", marginLeft: 20 }}>Attendance</h1>
//     </div>
//   );
// };

export default ActiveTab;
