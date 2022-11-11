import React from "react";
import { Container } from "./styles"


const SearchHeader = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default SearchHeader;