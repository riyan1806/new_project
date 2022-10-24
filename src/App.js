import { app2 } from "./firebaseConfig";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Demo_LoginPage";
import Studentsview from "./pages/studentview";
import Cmpn from "./pages/CMPN";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Dashboard" element={<Studentsview />} />
        <Route exact path="/Dashboard/Cmpn" element={<Cmpn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
