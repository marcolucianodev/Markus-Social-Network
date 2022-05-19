import React from "react";
import { Container } from "./styles";
import SearchIcon from '@mui/icons-material/Search';


const FormSearch = () => {
    return (
        <Container>
            <div className="input-area">
                <input type="text" name="search" id="form-search" placeholder="Procurar pessoas ou páginas..."/>
            </div>
            <button className="search-button">
                <SearchIcon className="icon-search"/>
            </button>
        </Container>
    );
}

export default FormSearch;