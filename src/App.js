
// import Signup from './components/signup'
// import Header from './components/header'
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Login_2 from './pages/Demo_LoginPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route
                exact
                path="/"
                element={<LandingPage/>}
                />
    <Route
                exact
                path="/Login"
                element={<Login_2 />}
                />
    </Routes>
    </BrowserRouter>
  );
}

export default App;