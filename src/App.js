import { app } from "./firebaseConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Demo_LoginPage";
import Studentsview from "./pages/studentview";
import Cmpn from "./pages/CMPN";
import Teacher1 from "./pages/Teacher1";
import Teacher2 from "./pages/Teacher2";
import Teacher3 from "./pages/Teacher3";
import Teacher4 from "./pages/Teacher4";
import Teacher5 from "./pages/Teacher5";
import Teacher6 from "./pages/Teacher6";


import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import It from "./pages/IT";

function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Dashboard" element={<Studentsview />} />
        <Route exact path="/Dashboard/Cmpn" element={<Cmpn />} />
        <Route exact path="/Dashboard/It" element={<It />} />
        <Route exact path="/Teacher/1" element={<Teacher1 />} />
        <Route exact path="/Teacher/2" element={<Teacher2 />} />
        <Route exact path="/Teacher/3" element={<Teacher3 />} />
        <Route exact path="/Teacher/4" element={<Teacher4 />} />
        <Route exact path="/Teacher/5" element={<Teacher5 />} />
        <Route exact path="/Teacher/6" element={<Teacher6 />} />


      </Routes>
      </BrowserRouter>

  );
}

export default App;
