import React from "react";
import { Container } from "./styles";
import ImgUser1  from '../_assets/img/user-1.jpg';
import ImgUser2 from '../_assets/img/user-2.jpg';
import ImgUser3 from '../_assets/img/user-3.jpg';
import ImgUser4 from '../_assets/img/user-4.jpg';
import ImgUser5 from '../_assets/img/user-5.jpg';
import ImgUser6 from '../_assets/img/user-6.jpg';
import ImgUser7 from '../_assets/img/user-7.jpg';


export const AvatarMembers = () => {
    return (
        <Container>
            <div className="avatar-item"><a href="/membros"><img src={ImgUser1} alt="User Avatar"></img></a></div>
            <div className="avatar-item"><a href="/membros"><img src={ImgUser2} alt="User Avatar"></img></a></div>
            <div className="avatar-item"><a href="/membros"><img src={ImgUser3} alt="User Avatar"></img></a></div>
            <div className="avatar-item"><a href="/membros"><img src={ImgUser4} alt="User Avatar"></img></a></div>
            <div className="avatar-item"><a href="/membros"><img src={ImgUser5} alt="User Avatar"></img></a></div>
            <div className="avatar-item"><a href="/membros"><img src={ImgUser6} alt="User Avatar"></img></a></div>
            <div className="avatar-item"><a href="/membros"><img src={ImgUser7} alt="User Avatar"></img></a></div>
        </Container>
    )
}