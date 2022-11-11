import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext([]);

export const UserProvider = ({children}) => {

  const [user, setUser] = useState([])

  const path_json = '/fake_API/data.json'

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(path_json);
      setUser(response.data.user)
    }
    getUser();
  }, [])

  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  )
}
