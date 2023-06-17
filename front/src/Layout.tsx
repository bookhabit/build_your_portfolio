import Header from "./Header";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
    </div>
  ); 
}