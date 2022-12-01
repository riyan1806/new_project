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
import ProtectedRoute from "./components/ProtectedRoutes";


import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import It from "./pages/IT";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (

      <BrowserRouter>
      <UserAuthContextProvider>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute><LandingPage /></ProtectedRoute>} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Dashboard" element={<ProtectedRoute><Studentsview /></ProtectedRoute>} />
        <Route exact path="/Dashboard/Cmpn" element={<ProtectedRoute><Cmpn /></ProtectedRoute>} />
        <Route exact path="/Dashboard/It" element={<ProtectedRoute><It /></ProtectedRoute>} />
        <Route exact path="/Teacher/1" element={<ProtectedRoute><Teacher1 /></ProtectedRoute>} />
        <Route exact path="/Teacher/2" element={<ProtectedRoute><Teacher2 /></ProtectedRoute>} />
        <Route exact path="/Teacher/3" element={<ProtectedRoute><Teacher3 /></ProtectedRoute>} />
        <Route exact path="/Teacher/4" element={<ProtectedRoute><Teacher4 /></ProtectedRoute>} />
        <Route exact path="/Teacher/5" element={<ProtectedRoute><Teacher5 /></ProtectedRoute>} />
        <Route exact path="/Teacher/6" element={<ProtectedRoute><Teacher6 /></ProtectedRoute>} />


      </Routes>
      </UserAuthContextProvider>
      
      </BrowserRouter>

  );
}

export default App;
