import React, { useContext } from "react";
import { Route, Navigate } from "react-router";
import Auth from "../context/Auth";

const AuthentificatedRoute = ({path, element}) => {
    const isAuthenticated = useContext(Auth).isAuthenticated;

    return isAuthenticated ?( 
        <Route path={path} element={element}></Route>
    ) : (
        <Navigate to={"/sign-in"} replace={true}></Navigate> 
    )
}


export default AuthentificatedRoute;