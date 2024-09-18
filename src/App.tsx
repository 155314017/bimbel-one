import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AdminCms from "./pages-cms/Admin";
import StudentPages from "./pages/StudentPages";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentPages/>} />

          <Route path="cms/admin/*" element={<AdminCms />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
