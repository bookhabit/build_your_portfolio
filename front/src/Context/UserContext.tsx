import {createContext, useEffect, useState} from "react";
import axios from "axios";
import { UserInfoType } from "../Types/userType";

export type UserContextType = {
  user: UserInfoType | null;
  setUser: (user: UserInfoType | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserInfoType | null>(null);  
  useEffect(() => {
    if (!user) {
      axios.get('/profile')
            .then(({data}:{data:UserInfoType}) => {
              setUser(data);
            });
    }
  }, []);
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  );
}