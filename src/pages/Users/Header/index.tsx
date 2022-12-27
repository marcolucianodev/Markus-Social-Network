import React, { useContext } from "react";
import { HeaderInfo, UserData, UserHeader, UserInfo, UserProfileImage } from "../styles";

import { FaStar} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FcApproval } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";

const Header = () => {

    const { id }: any = useParams();

    const { user }: any = useContext(UserContext)

    const headerData = []
    for(let i in user) {
        headerData.push(
            <UserHeader coverHeader={user[i].images.cover}>
                <div className="user-header-mask"></div>
                <HeaderInfo>
                    <UserData>
                        <UserProfileImage>
                            <img src={user[i].images.profile} alt={user[i].name} />
                        </UserProfileImage>
                        <UserInfo>
                            <div className="name">
                                <h2>{user[i].name}</h2>
                                <h2>{user[i].name}</h2>
                                <span>
                                <FcApproval size="24" />
                                </span>
                            </div>
                            <div className="user-meta">
                                <div className="user-meta-left">
                                <ImLocation size="16" /><span>{user[i].address}</span>
                                </div>
                                <div className="user-meta-right">
                                <span>
                                    <FaStar color="var(--main-yellow)" size="18" />
                                    <FaStar color="var(--main-yellow)" size="18" />
                                    <FaStar color="var(--main-yellow)" size="18" />
                                    <FaStar color="var(--main-yellow)" size="18" />
                                    <FaStar size="18" />
                                </span>
                                <span className="bullet-separator first-bullet">•</span>
                                <div className="ratings-info">
                                    <span>{user[i].classification.rating} de 5</span>
                                    <span className="bullet-separator">•</span>
                                    <span>{user[i].classification.totalRatings} classificações</span>
                                </div>
                                </div>
                            </div>
                        </UserInfo>
                    </UserData>
                </HeaderInfo>
            </UserHeader>
        );
    }

    return (
        <>
            {headerData[id]}
        </>
    )
}

export default Header;