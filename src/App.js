import React from "react";
import GlobalStyle from "./components/_global/GlobalStyles";
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Feed from "./pages/Feed";
import Menu from "./components/Menu";
import { MainContainer } from "./components/MainContainer";
import Header from "./components/Header";
import { FixedHeader } from "./components/FixedHeader";
import { Footer } from "./components/Footer";
import MembersPage from "./pages/MembersPage";
import GroupsPage from "./pages/GroupsPage";
import LoginPopup from "./components/LoginPopup";

const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>
      <LoginPopup />
      <Menu />
      <MainContainer>
        <Header />
        <FixedHeader />
          <Routes>
            <Route path="/" element={<Feed /> } />
            <Route path="/membros" element={<MembersPage /> } />
            <Route path="/grupos" element={<GroupsPage />} />
          </Routes>
        <Footer />
        </MainContainer>
      </BrowserRouter>

      <GlobalStyle />
    </div>
  );
}

export default App;
