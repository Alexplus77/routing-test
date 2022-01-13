import React, {useContext} from "react";
import {ContextValue} from "../hocs/ContextProvider";
import {useLocation, useNavigate} from "react-router-dom";

const Registration=()=>{
    const {handleValue, handleSubmit}=useContext(ContextValue)
    const location=useLocation()
    const path=location.state?.from?.pathname || '/'
    const navigate=useNavigate()
    console.log(path)
 return(

    <div className='container'>
        <h1>Страница регистрации пользователя</h1>
        <form onSubmit={(e)=>handleSubmit(e, ()=>navigate(path))}>
            <label>Введите имя
                <input onChange={handleValue} name='username'/>
            </label>
            <button onSubmit={(e)=>handleSubmit(e, ()=>navigate(path))}>Ok</button>
        </form>
    </div>
 )
}

export {Registration}