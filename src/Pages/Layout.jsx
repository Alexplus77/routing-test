import React, {useContext} from 'react';
import {Outlet, NavLink, Link} from "react-router-dom";
import {ContextValue} from "../hocs/ContextProvider";

const Layout=()=>{
    const {setUser}=useContext(ContextValue)
    return(<div>
       <header>
               <nav className="navbar navbar-dark bg-primary"  >
                   <div className='container'>
                   <NavLink  style={({isActive})=>isActive ? {backgroundColor:'white', color:'black'} : {color:'white'}  } to={'/registration'}>Регистрация</NavLink>
                   <NavLink style={({isActive})=>isActive ? {backgroundColor:'white', color:'black'} :{color:'white'} } to={'/'}>Главная</NavLink>
                   <NavLink style={({isActive})=>isActive ? {backgroundColor:'white', color:'black'} : {color:'white'}} to={'/private'}>Приватная</NavLink>
                       <button onClick={()=>setUser(null)}>Logout</button>
                   </div>
               </nav>
       </header>
<Outlet/>
    </div>)
}
export {Layout}