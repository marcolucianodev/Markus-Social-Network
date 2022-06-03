import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import { HeadlineMembersInfo } from "../WidgetUserInfo";

export const MembersInfo = (props) => {
    return (
        <HeadlineMembersInfo>
            <a href="/membros">
                <div className="user-headline-image">
                    <img src={props.imgProfile} alt="Img Profile" />
                </div>
            </a>
            <div className="user-headline-info">
                <div className="first-headline">
                    <p>
                        <span className="user-name">
                            <a href="/membros">{props.userName} <span className="icon">{! props.notdisplay && <CheckIcon className="user-check-icon" />}</span></a>
                        </span>
                    </p>
                </div>
                <div className="second-headline">
                    <span className="activity-year">
                        {props.postYear}
                    </span>
                </div>
            </div>
        </HeadlineMembersInfo> 
    );
}