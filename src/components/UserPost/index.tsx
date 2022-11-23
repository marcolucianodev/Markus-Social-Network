import React from "react";
import { Link } from "react-router-dom";

import { FeedUserContent, PostArea, PostText, PostCover, UserHeadline, ActivityAreaPost } from "../FeedPost";
import CheckIcon from '@mui/icons-material/Check';
import PublicIcon from '@mui/icons-material/Public';
import ForumIcon from '@mui/icons-material/Forum';
import { UserPostTypes } from "../../types";


export const UserPost = ({
    comment,
    comment2,
    commentsNumber,
    coverPost,
    groupName,
    imgLikedUser1,
    imgLikedUser2,
    imgLikedUser3,
    imgProfile,
    postDate,
    textPost,
    userName
}: UserPostTypes) => {
    return (
        <FeedUserContent className="posted-notice-container">
            <UserHeadline>
                <div className="user-headline-image">
                    <img src={imgProfile} alt="Img Profile" />
                </div>
                <div className="user-headline-info">
                    <div className="first-headline">
                        <p>
                            <span className="user-name">
                                <Link to="/membros">{userName}
                                    <span><CheckIcon className="user-check-icon" /></span>
                                </Link>
                            </span>
                            postou no grupo &nbsp;
                            <span className="group-name">
                                <Link to="/">{groupName}</Link>
                            </span>
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
            <PostArea>
                <PostText>
                    {textPost}
                </PostText>
                <PostCover>
                    <img src={coverPost} alt="Post" />
                </PostCover>
            </PostArea>
            <ActivityAreaPost>
                <div className="activity-area-liked">
                    <div>
                        <Link to="/membros"><img src={imgLikedUser1} alt="" /></Link>
                        <Link to="/membros"><img src={imgLikedUser2} alt="" /></Link>
                        <Link to="/membros"><img src={imgLikedUser3} alt="" /></Link>
                    </div>
                    <div>
                        <span>
                            curtiram
                        </span>
                    </div>
                </div>
                <div className="activity-comments-area">
                    <span><ForumIcon className="comments-icon" />{commentsNumber}</span>
                </div>
            </ActivityAreaPost>
            <div className="comment-area">
                {comment}
                {comment2}
            </div>
        </FeedUserContent>
    );
}