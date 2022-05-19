import React from "react";
import { Container } from "./styles";
import  Logo  from "../_assets/img/logo.png";

export const FixedHeader = () => {
    return (
        <Container>
            <a href="#">
                <div className="logo">
                    <img src={Logo} alt="Logo Markus" />
                    <div className="title-box">
                        <div className="title-logo">
                            <h2>Markus</h2>
                        </div>
                        <div className="desc-logo">
                            <h3>Social Network</h3>
                        </div>
                    </div>
                </div>
            </a>
        </Container>
    );
}