import React from "react";
import GlobalStyle from "./components/_global/GlobalStyles";
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Feed from "./pages/Feed";
import Menu from "./components/Menu";
import { MainContainer } from "./components/MainContainer";
import Header from "./components/Header";
import { FixedHeader } from "./components/FixedHeader";
import MainBanner from "./components/MainBanner";
import { Footer } from "./components/Footer";
import AnotherPage from "./pages/AnotherPage";

const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Menu />
      <MainContainer>
        <Header />
        <FixedHeader />
        <MainBanner />
          <Routes>
            <Route path="/" element={<Feed /> } />
            <Route path="/outra-pagina" element={<AnotherPage /> } />
          </Routes>
        <Footer />
        </MainContainer>
      </BrowserRouter>

      <GlobalStyle />
    </div>
  );
}

export default App;
