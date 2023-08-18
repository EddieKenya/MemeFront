import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/home/Home";
import Profile from './pages/profile/Profile';
import EditProfile from './pages/editProfile/EditProfile';
import PrivateRoutes from "./pages/Privateroute/PrivateRoute";
import LogOut from "./pages/logout";
import About from "./pages/about/about";
import SignUp from "./pages/Signup";
function App() {
  

  return (
    <div className="Applications">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="signup" element={<SignUp/>}/>  
            <Route path="signin" element={<SignIn/>}/>
            <Route index element={<Home/>} />
            <Route path="logout" element={<LogOut/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
