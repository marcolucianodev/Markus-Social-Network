import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";
import { UserContext } from '../../contexts/userContext'


export const AvatarMembers = () => {

    const { user } = useContext(UserContext);

    const params = useParams();

    return (
        <Container>
            {user.map((user) => {
                return (
                    <div className="avatar-item" key={user.id}>
                        <Link to="/membros">
                            <img src={user.image_profile} alt={user.name} />
                        </Link>
                    </div>
                )
            })}
        </Container>
    )
}