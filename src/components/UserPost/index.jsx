import React from "react";
import { FeedUserContent, PostArea, PostText, PostCover, UserHeadline, ActivityAreaPost } from "../FeedPost";
import CheckIcon from '@mui/icons-material/Check';
import PublicIcon from '@mui/icons-material/Public';
import ForumIcon from '@mui/icons-material/Forum';


export const UserPost = (props) => {
    return (
        <FeedUserContent className="posted-notice-container">
            <UserHeadline userName="Michelle">
                <div className="user-headline-image">
                    <img src={props.imgProfile} alt="Img Profile" />
                </div>
                <div className="user-headline-info">
                    <div className="first-headline">
                        <p>
                            <span className="user-name">
                                <a href="/membros">{props.userName}
                                    <span><CheckIcon className="user-check-icon" /></span>
                                </a>
                            </span>
                            postou no grupo &nbsp;
                            <span className="group-name">
                                <a href="/">{props.groupName}</a>
                            </span>
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
            <PostArea>
                <PostText>
                    {props.textPost}
                </PostText>
                <PostCover>
                    <img src={props.coverPost} alt="Post" />
                </PostCover>
            </PostArea>
            <ActivityAreaPost>
                <div className="activity-area-liked">
                    <div>
                        <a href="/membros"><img src={props.imgLikedUser1} alt="" /></a>
                        <a href="/membros"><img src={props.imgLikedUser2} alt="" /></a>
                        <a href="/membros"><img src={props.imgLikedUser3} alt="" /></a>
                    </div>
                    <div>
                        <span>
                            curtiram
                        </span>
                    </div>
                </div>
                <div className="activity-comments-area">
                    <span><ForumIcon className="comments-icon" />{props.commentsNumber}</span>
                </div>
            </ActivityAreaPost>
            <div className="comment-area">
                {props.comment}
                {props.comment2}
            </div>
        </FeedUserContent>
    );
}