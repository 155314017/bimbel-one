import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AdminCms from "./pages-cms/Admin";
import TeacherPages from "./pages/TeacherPages";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<TeacherPages />} />
          <Route path="/login" element={<Login />} />

          <Route path="cms/admin/*" element={<AdminCms />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
