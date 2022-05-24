import React from "react";
import { Container } from "./styles";
import upBanner from "../_assets/img/up-main-banner.png"

const MainBanner = (props) => {
    return (
        <Container>
            <div className="desc-banner">
                <h1>{props.titlePage}</h1>
                <p>{props.pageDescription}</p>
                <h3>Markus Social Network</h3>
          </div>
          <div className="img-up-banner-area">
            <img
              className="up-banner"
              src={upBanner} 
              alt="UpBanner" />
          </div>
        </Container>
    );
}

export default MainBanner;