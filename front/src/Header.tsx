import { useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import { UserContext, UserContextType } from "./Context/UserContext";

export default function Header() {
  const { user } = useContext<UserContextType>(UserContext);
  const router = useNavigate();
  return (
    <header className="flex justify-between h-16 items-center bg-header_bg px-10 py-3">
      <Link to={'/'} className="flex items-center ">
        <span className="font-bold text-xl text-header_element">My Portfolio</span>
      </Link>
      <div className="relative xl:w-1/3 lg:w-1/2
      sm:w-1/3 xs:w-32 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 absolute right-2 text-header_bg cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input type="text" className="bg-gray-50 rounded-xl h-8 w-full px-3 text--header_bg focus:outline-none"/>
      </div>
      {user ? (
        <div className="flex items-center gap-2 bg-header_element rounded-full py-2 px-4 cursor-pointer " onClick={()=>router('/account')}>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-header_bg">
            {user.name}
          </div>
        </div>
        ) : 
        <div className="flex gap-2">
          <Link to={'/register'} className="flex items-center gap-2 xs:gap-0 ">
            <p className="text-header_element font-sans text-sm">
              회원가입
            </p>
          </Link>
          <Link to={'/login'} className="flex items-center gap-2 xs:gap-0 ">
            <p className="text-header_element font-sans text-sm ml-5">
              로그인
            </p>
          </Link>
        </div>
        }      
         </header>
  );
}