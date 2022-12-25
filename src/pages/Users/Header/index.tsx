import React from "react"
import { HeaderInfo, UserData, UserHeader, UserInfo, UserProfileImage } from "../styles";

import { FaStar} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FcApproval } from "react-icons/fc";



type HeaderProps = {
    name: string,
    imageProfile: string,
    address: string,
    rating: string,
    totalRatings: string,
    imageCover: string
}

const Header = ({
    name, 
    imageProfile, 
    address, 
    rating, 
    totalRatings,
    imageCover
}: HeaderProps) => {
    return (
        <UserHeader coverHeader={imageCover}>
            <div className="user-header-mask"></div>
                <HeaderInfo>
                    <UserData>
                        <UserProfileImage>
                            <img src={imageProfile} alt={name} />
                        </UserProfileImage>
                        <UserInfo>
                            <div className="name">
                                <h2>{name}</h2>
                                <h2>{name}</h2>
                                <span>
                                <FcApproval size="24" />
                                </span>
                            </div>
                            <div className="user-meta">
                                <div className="user-meta-left">
                                <ImLocation size="16" /><span>{address}</span>
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
                                    <span>{rating} de 5</span>
                                    <span className="bullet-separator">•</span>
                                    <span>{totalRatings} classificações</span>
                                </div>
                                </div>
                            </div>
                        </UserInfo>
                    </UserData>
                </HeaderInfo>
        </UserHeader>
    )
}

export default Header;