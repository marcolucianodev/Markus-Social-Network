import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import MembersPage from "./pages/MembersPage";
import GroupsPage from "./pages/GroupsPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Users from "./pages/Users";
import ComingSoon from "./pages/ComingSoon";

const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Feed /> } />
        <Route path="/membros" element={<MembersPage /> } />
        <Route path="/grupos" element={<GroupsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/redefinir-senha" element={<ResetPassword />} />
        <Route path="/membros/:id" element={<Users />}/>
        <Route path="/pagina-em-construcao" element={<ComingSoon />} />
      </Routes>
  )
}

export default MainRoutes;