import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import { HeadlineMembersInfo } from "../WidgetUserInfo";
import { UserPropsTypes } from "../../types";

export const MembersInfo = ({name, image_profile, notDisplay, postYear}: UserPropsTypes) => {
    return (
        <HeadlineMembersInfo>
            <a href="/membros">
                <div className="user-headline-image">
                    <img src={image_profile} alt="Img Profile" />
                </div>
            </a>
            <div className="user-headline-info">
                <div className="first-headline">
                    <p>
                        <span className="user-name">
                            <a href="/membros">{name} <span className="icon">{! notDisplay && <CheckIcon className="user-check-icon" />}</span></a>
                        </span>
                    </p>
                </div>
                <div className="second-headline">
                    <span className="activity-year">
                        {postYear}
                    </span>
                </div>
            </div>
        </HeadlineMembersInfo> 
    );
}