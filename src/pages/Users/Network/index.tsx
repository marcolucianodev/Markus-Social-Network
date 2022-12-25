import React from "react";
import { HeaderNetwork } from "../styles";

import { 
    FaFacebookF, 
    FaTwitter,
    FaInstagram
} from "react-icons/fa";

type NetworkProps = {
    totalPost: string,
    totalComments: string,
    totalViews: string
}

const Network = ({
    totalPost,
    totalComments,
    totalViews
}: NetworkProps) => {
    return (
        <HeaderNetwork>
            <div className="header-network-content">
                <div className="social-networks">
                    <FaFacebookF size="20" color="var(--white-text-color)" className="facebook-icon" />
                    <FaTwitter size="20" color="var(--white-text-color)" className="twitter-icon" />
                    <FaInstagram size="20" color="var(--white-text-color)" className="instagram-icon" />
                </div>
                <div className="user-activities">
                    <div className="posts-data">
                        <span>{totalPost}</span>
                        <span>posts</span>
                    </div>
                    <div className="comments-data">
                        <span>{totalComments}</span>
                        <span>comentários</span>
                    </div>
                    <div className="views-data">
                        <span>{totalViews}</span>
                        <span>vizualizações</span>
                    </div>
                </div>
            </div>
        </HeaderNetwork>
    )
}

export default Network;