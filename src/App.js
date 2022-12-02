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
import Teacher50 from "./pages/EXTC/Teacher50";
import Teacher51 from "./pages/EXTC/Teacher51";
import Teacher52 from "./pages/EXTC/Teacher52";
import Teacher60 from "./pages/ETRX/Teacher60";
import Teacher61 from "./pages/ETRX/Teacher61"; 
import Teacher62 from "./pages/ETRX/Teacher62"; 
import Teacher70 from "./pages/BIOM/Teacher70";
import Teacher71 from "./pages/BIOM/Teacher71";
import Teacher72 from "./pages/BIOM/Teacher72";

import Faculty from "./pages/Faculty";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Extc from "./pages/EXTC/EXTC";
import Etrx from "./pages/ETRX/ETRX";
import Biom from "./pages/BIOM/BIOM";
import It from "./pages/IT";

import Faculty_Biom from "./pages/FacultyPages/BIOM";
import Faculty_Extc from "./pages/FacultyPages/EXTC";
import Faculty_Etrx from "./pages/FacultyPages/ETRX";
import Faculty_It from "./pages/FacultyPages/IT";
import Faculty_Cmpn from "./pages/FacultyPages/CMPN";
import Faculty_Dashboard from "./pages/FacultyPages/Dashboard";



import Admin from "./pages/Admin/Admin";
import Admin_Dashboard from "./pages/Admin/Dashboard";
import Admin_Biom from "./pages/Admin/BIOM";
import Admin_Cmpn from "./pages/Admin/CMPN";
import Admin_Etrx from "./pages/Admin/ETRX";
import Admin_Extc from "./pages/Admin/EXTC";
import Admin_It from "./pages/Admin/IT";

import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (

      <BrowserRouter>
      <UserAuthContextProvider>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Login" element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route exact path="/Dashboard" element={<Studentsview />} />
          <Route exact path="/Dashboard/Cmpn" element={<Cmpn />} />
          <Route exact path="/Dashboard/It" element={<It />} />
          <Route exact path="/Dashboard/Extc" element={<Extc />} />
          <Route exact path="/Dashboard/Etrx" element={<Etrx />} />
          <Route exact path="/Dashboard/Biom" element={<Biom />} />

          <Route exact path="/Faculty/Dashboard/Cmpn" element={<Faculty_Cmpn />} />
          <Route exact path="/Faculty/Dashboard/It" element={<Faculty_It />} />
          <Route exact path="/Faculty/Dashboard/Extc" element={<Faculty_Extc />} />
          <Route exact path="/Faculty/Dashboard/Etrx" element={<Faculty_Etrx />} />
          <Route exact path="/Faculty/Dashboard/Biom" element={<Faculty_Biom />} />


          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/Admin/Dashboard" element={<Admin_Dashboard />} />
          <Route exact path="/Admin/Dashboard/Cmpn" element={<Admin_Cmpn />} />
          <Route exact path="/Admin/Dashboard/It" element={<Admin_It />} />
          <Route exact path="/Admin/Dashboard/Extc" element={<Admin_Extc />} />
          <Route exact path="/Admin/Dashboard/Etrx" element={<Admin_Etrx/>} />
          <Route exact path="/Admin/Dashboard/Biom" element={<Admin_Biom />} />



          <Route exact path="/Teacher/1" element={<Teacher1 />} />
          <Route exact path="/Teacher/2" element={<Teacher2 />} />
          <Route exact path="/Teacher/3" element={<Teacher3 />} />
          <Route exact path="/Teacher/4" element={<Teacher4 />} />
          <Route exact path="/Teacher/5" element={<Teacher5 />} />
          <Route exact path="/Teacher/6" element={<Teacher6 />} />
          <Route exact path="/Teacher/50" element={<Teacher50 />} />
          <Route exact path="/Teacher/51" element={<Teacher51 />} />
          <Route exact path="/Teacher/52" element={<Teacher52 />} />
          <Route exact path="/Teacher/60" element={<Teacher60 />} />
          <Route exact path="/Teacher/61" element={<Teacher61 />} />
          <Route exact path="/Teacher/62" element={<Teacher62 />} />
          <Route exact path="/Teacher/70" element={<Teacher70 />} />
          <Route exact path="/Teacher/71" element={<Teacher71 />} />
          <Route exact path="/Teacher/72" element={<Teacher72 />} />



          <Route exact path="/Faculty" element={<Faculty />} />
          <Route exact path="/Faculty/Dashboard" element={<Faculty_Dashboard />} />


        </Route>



      </Routes>
      </UserAuthContextProvider>
      
      </BrowserRouter>

  );
}

export default App;
