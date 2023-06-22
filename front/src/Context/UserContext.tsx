import {createContext, useEffect, useState} from "react";
import axios from "axios";
import { UserProfileType } from "../Types/userType";

export type UserContextType = {
  user: UserProfileType | null;
  setUser: (user: UserProfileType | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfileType | null>(null);  
  
  useEffect(() => {
    if (!user) {
      axios.get('/profile')
            .then(({data}:{data:UserProfileType}) => {
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