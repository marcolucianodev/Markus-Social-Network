import { useContext } from "react";
import { UserContext } from "../../contexts/userContext"

const User2 = () => {

  const { user } = useContext(UserContext)

  const userName = user.map(user => user.name)

  return (
    <div style={{marginTop:'70px'}}>
      Página de {userName[1]}
    </div>
  )
}

export default User2;