import React from "react";
import { Link } from "react-router-dom";

import CheckIcon from '@mui/icons-material/Check';
import { HeadlineMembersInfo } from "../WidgetUserInfo";
import { MembersInfoTypes } from "../../types";

export const MembersInfo = ({name, image_profile, notDisplay, postDate}: MembersInfoTypes) => {
    return (
        <HeadlineMembersInfo>
            <Link to="/membros">
                <div className="user-headline-image">
                    <img src={image_profile} alt="Img Profile" />
                </div>
            </Link>
            <div className="user-headline-info">
                <div className="first-headline">
                    <p>
                        <span className="user-name">
                            <Link to="/membros">{name} <span className="icon">{!notDisplay && <CheckIcon className="user-check-icon" />}</span></Link>
                        </span>
                    </p>
                </div>
                <div className="second-headline">
                    <span className="activity-year">
                        {postDate}
                    </span>
                </div>
            </div>
        </HeadlineMembersInfo> 
    );
}