import React from "react";
import { Container, MaskBanner } from "./styles";
import upBanner from "../_assets/img/up-main-banner.png"

const MainBanner = ({ children, titlePage, pageDescription }) => {
    return (
        <Container>
            {children}
            <div className="desc-banner">
                <h1>{titlePage}</h1>
                <p>{pageDescription}</p>
                <h3>Markus Social Network</h3>
            </div>
        </Container>
    );
}

export default MainBanner;