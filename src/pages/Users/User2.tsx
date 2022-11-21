import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext"
import { UserPropsTypes } from "../../types";

const User2 = () => {

  const { user }: any = useContext(UserContext)

  const userName = user.map((user: UserPropsTypes) => user.name)

  return (
    <div style={{marginTop:'70px'}}>
      Página de {userName[1]}
    </div>
  )
}

export default User2;