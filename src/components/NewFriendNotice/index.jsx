import React from "react";
import { FeedUserContent, UserHeadline, UserCover, UserInfo } from "../FeedPost";
import PublicIcon from '@mui/icons-material/Public';
import CheckIcon from '@mui/icons-material/Check';

export const NewFriendNotice = (props) => {
    return (
        <FeedUserContent>
            <UserHeadline>
                <a href="/membros">
                    <div className="user-headline-image">
                        <img src={props.imgProfile} alt={`Usuário ${props.altTitle}`} />
                    </div>
                </a>
                <div className="user-headline-info">
                    <div className="first-headline">
                        <p>
                            <span className="user-name">
                                <a href="/membros">{props.userName} <span><CheckIcon className="user-check-icon" /></span></a>
                            </span>
                             e &nbsp;
                            <span className="user-friend">
                                <a href="/membros">{props.friend}
                                <span><CheckIcon className="user-check-icon" /></span>
                                </a>
                            </span>
                             agora são amigos
                        </p>
                    </div>
                    <div className="second-headline">
                        <PublicIcon className="second-headline-icon" />
                        <span className="activity-year">
                            <a href="/">{props.postDate}</a>
                        </span>
                    </div>
                </div>
            </UserHeadline>
            <UserCover>
                    <img src={props.ImgUserCover} alt="User Cover Img" />
            </UserCover>
            <UserInfo>
                    <div className="user-friends-profile">
                        <a href="/membros"><img src={props.ImgFriendsProfile} alt="Img Friends Profile" /></a>
                    </div>
                    <div className="user-friend-headline">
                        <span className="user-friend">
                            <a href="/membros">{props.friend}
                            </a>
                        </span>
                        <span className="nickname">
                            @{props.friend}
                        </span>
                    </div>
            </UserInfo>
        </FeedUserContent>
    );
}