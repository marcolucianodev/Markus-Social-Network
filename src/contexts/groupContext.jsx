import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GroupContext = createContext([]);

export const GroupProvider = ({children}) => {

  const path_json = '/fake_API/data.json'

  const [group, setGroup] = useState([])

  useEffect(() => {
    const getGroup = async () => {
      const response = await axios.get(path_json);
      setGroup(response.data.group)
    }
    getGroup();
  }, []);

  return (
    <GroupContext.Provider value={{group}}>
      {children}
    </GroupContext.Provider>
  )
}

