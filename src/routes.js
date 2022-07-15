import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import MembersPage from "./pages/MembersPage";
import GroupsPage from "./pages/GroupsPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import User1 from "./pages/Users/User1";
import User2 from "./pages/Users/User2";

const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Feed /> } />
        <Route path="/membros" element={<MembersPage /> } />
        <Route path="/grupos" element={<GroupsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/redefinir-senha" element={<ResetPassword />} />
        <Route path="/user1" element={<User1 />} />
        <Route path="/user2" element={<User2 />} />
      </Routes>
  )
}

export default MainRoutes;