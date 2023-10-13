import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
const Main = () => {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}; 

export default Main;
