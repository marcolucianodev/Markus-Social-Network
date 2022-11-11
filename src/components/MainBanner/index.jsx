import React from "react";
import { Container } from "./styles";

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