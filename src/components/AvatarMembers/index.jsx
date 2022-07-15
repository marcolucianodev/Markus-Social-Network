import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";
import { UserContext } from '../../contexts/userContext'


export const AvatarMembers = () => {

    const { user } = useContext(UserContext);

    return (
        <Container>
            {user.map((user) => {
                return (
                    <div className="avatar-item" key={user.id}>
                        <Link to={`/user/${user.id}`} title={user.name}>
                            <img src={user.image_profile} alt={user.name} />
                        </Link>
                    </div>
                )
            })}
        </Container>
    )
}