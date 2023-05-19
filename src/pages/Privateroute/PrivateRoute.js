import { Navigate, Outlet } from "react-router-dom";
 

const PrivateRoutes = () => {
    const accessToken = localStorage.getItem('access_token');
    return ( 
        accessToken? <Outlet/> :<Navigate to="signin"/>
     );
}
 
export default PrivateRoutes;