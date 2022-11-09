import React from "react";
import { FeedUserContent, UserHeadline, UserCover, UserInfo } from "../FeedPost";
import PublicIcon from '@mui/icons-material/Public';
import CheckIcon from '@mui/icons-material/Check';
import { NewFriendNoticeProps } from "../../types";

export const NewFriendNotice = ({altTitle, friend, imgFriendsProfile, postDate, imgProfile, imgUserCover, userName}: NewFriendNoticeProps) => {
    return (
        <FeedUserContent>
            <UserHeadline>
                <a href="/membros">
                    <div className="user-headline-image">
                        <img src={imgProfile} alt={`Usuário ${altTitle}`} />
                    </div>
                </a>
                <div className="user-headline-info">
                    <div className="first-headline">
                        <p>
                            <span className="user-name">
                                <a href="/membros">{userName} <span><CheckIcon className="user-check-icon" /></span></a>
                            </span>
                             e &nbsp;
                            <span className="user-friend">
                                <a href="/membros">{friend}
                                <span><CheckIcon className="user-check-icon" /></span>
                                </a>
                            </span>
                             agora são amigos
                        </p>
                    </div>
                    <div className="second-headline">
                        <PublicIcon className="second-headline-icon" />
                        <span className="activity-year">
                            <a href="/">{postDate}</a>
                        </span>
                    </div>
                </div>
            </UserHeadline>
            <UserCover>
                    <img src={imgUserCover} alt="User Cover Img" />
            </UserCover>
            <UserInfo>
                    <div className="user-friends-profile">
                        <a href="/membros"><img src={imgFriendsProfile} alt="Img Friends Profile" /></a>
                    </div>
                    <div className="user-friend-headline">
                        <span className="user-friend">
                            <a href="/membros">{friend}
                            </a>
                        </span>
                        <span className="nickname">
                            @{friend}
                        </span>
                    </div>
            </UserInfo>
        </FeedUserContent>
    );
}