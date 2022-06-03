import React from "react";
import { CommentsContainer} from "./styles";
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Comments = (props) => {
    return (
        <CommentsContainer>
            <div class="comment-box">
                <div className="comment-headline">
                    <div className="user-comment-headline-info">
                        <a href="/membros"><img src={props.userImg} alt="User Post Img" /></a>
                        <span className="post-user-data">
                            <a href="/membros"><span>{props.userName}</span></a>
                            <span><CheckIcon className="user-check-icon" /></span>
                        </span>
                    </div>
                    <div className="comment-date">
                        <AccessTimeIcon className="acess-time-icon" />
                        <a href="/"><span>{props.postDate}</span></a>
                    </div>
                </div>
                <div className="comment-text">
                    <p>{props.textComment}</p>
                </div>
            </div>
        </CommentsContainer>
    );
}