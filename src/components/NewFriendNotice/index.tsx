import React from "react";
import { Link } from "react-router-dom";

import { FeedUserContent, UserHeadline, UserCover, UserInfo } from "../FeedPost";
import PublicIcon from '@mui/icons-material/Public';
import CheckIcon from '@mui/icons-material/Check';
import { NewFriendNoticeProps } from "../../types";

export const NewFriendNotice = ({
    userId, 
    friendId, 
    altTitle, 
    friend, 
    imgFriendsProfile, 
    postDate, 
    imgProfile, 
    imgUserCover, 
    userName
}: NewFriendNoticeProps) => {
    return (
        <FeedUserContent>
            <UserHeadline>
                <Link to={`/users/${userId}`}>
                    <div className="user-headline-image">
                        <img src={imgProfile} alt={`Usuário ${altTitle}`} />
                    </div>
                </Link>
                <div className="user-headline-info">
                    <div className="first-headline">
                        <p>
                            <span className="user-name">
                                <Link to={`/users/${userId}`}>{userName} <span><CheckIcon className="user-check-icon" /></span></Link>
                            </span>
                             e &nbsp;
                            <span className="user-friend">
                                <Link to={`/users/${friendId}`}>{friend}
                                <span><CheckIcon className="user-check-icon" /></span>
                                </Link>
                            </span>
                             agora são amigos
                        </p>
                    </div>
                    <div className="second-headline">
                        <PublicIcon className="second-headline-icon" />
                        <span className="activity-year">
                            {postDate}
                        </span>
                    </div>
                </div>
            </UserHeadline>
            <UserCover>
                    <img src={imgUserCover} alt="User Cover Img" />
            </UserCover>
            <UserInfo>
                    <div className="user-friends-profile">
                        <Link to={`/users/${friendId}`}><img src={imgFriendsProfile} alt="Img Friends Profile" /></Link>
                    </div>
                    <div className="user-friend-headline">
                        <span className="user-friend">
                            <Link to={`/users/${friendId}`}>{friend}</Link>
                        </span>
                        <span className="nickname">
                            @{friend}
                        </span>
                    </div>
            </UserInfo>
        </FeedUserContent>
    );
}