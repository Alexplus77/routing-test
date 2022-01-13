import React from "react";
import {useLocation, Navigate} from "react-router-dom";
import {useContext} from "react";
import {ContextValue} from "./ContextProvider";

const RequireAuth=({children})=>{
const {user}=useContext(ContextValue)
    const location=useLocation()
    if(!user){
     return   <Navigate to={'/registration'} state={{from:location}}/>
    }

   return children
}

export {RequireAuth}