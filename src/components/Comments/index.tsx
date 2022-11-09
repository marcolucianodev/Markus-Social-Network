import React from "react";
import { CommentsContainer} from "./styles";
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CommentsTypes } from "../../types";

export const Comments = ({userImg, userName, postDate, textComment}: CommentsTypes) => {
    return (
        <CommentsContainer>
            <div className="comment-box">
                <div className="comment-headline">
                    <div className="user-comment-headline-info">
                        <a href="/membros"><img src={userImg} alt="User Post Img" /></a>
                        <span className="post-user-data">
                            <a href="/membros"><span>{userName}</span></a>
                            <span><CheckIcon className="user-check-icon" /></span>
                        </span>
                    </div>
                    <div className="comment-date">
                        <AccessTimeIcon className="acess-time-icon" />
                        <a href="/"><span>{postDate}</span></a>
                    </div>
                </div>
                <div className="comment-text">
                    <p>{textComment}</p>
                </div>
            </div>
        </CommentsContainer>
    );
}