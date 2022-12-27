import React, { useContext } from "react";
import { HeaderNetwork } from "../styles";

import { 
    FaFacebookF, 
    FaTwitter,
    FaInstagram
} from "react-icons/fa";
import { UserContext } from "../../../contexts/userContext";
import { useParams } from "react-router-dom";

const Network = () => {

    const { id }: any = useParams()

    const { user }:any = useContext(UserContext);

    const networkData = [];
    for(let i in user) {
        networkData.push(
           <div className="header-network-content">
                <div className="social-networks">
                    <FaFacebookF size="20" color="var(--white-text-color)" className="facebook-icon" />
                    <FaTwitter size="20" color="var(--white-text-color)" className="twitter-icon" />
                    <FaInstagram size="20" color="var(--white-text-color)" className="instagram-icon" />
                </div>
                <div className="user-activities">
                    <div className="posts-data">
                        <span>{user[i].activity.totPosts}</span>
                        <span>posts</span>
                    </div>
                    <div className="comments-data">
                        <span>{user[i].activity.totComments}</span>
                        <span>comentários</span>
                    </div>
                    <div className="views-data">
                        <span>{user[i].activity.totViews}</span>
                        <span>vizualizações</span>
                    </div>
                </div>
           </div>
        )
    }

    return (
        <HeaderNetwork>
            {networkData[id]}
        </HeaderNetwork>
    )
}

export default Network;