import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/home/Home";
import Profile from './pages/profile/Profile';
import EditProfile from './pages/editProfile/EditProfile';
import { useEffect } from "react";
import axios from "axios";
import LogOut from "./pages/logout";

function App() {
  

  return (
    <div className="Applications">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="logout" element={<LogOut/>}/>
            <Route path="signin" element={<SignIn/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route index element={<Home/>} />
            <Route path="profile">
              <Route path=":userId" element={<Profile />} />
              <Route path=":userId/edit" element={<EditProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
