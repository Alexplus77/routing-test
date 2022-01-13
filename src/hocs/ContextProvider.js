import React, {createContext, useState} from "react";

const ContextValue=createContext(null)

const ContextProvider=(props)=>{
    const [user, setUser]=useState(null)
    const [valueInput, setValueInput]=useState(null)

const handleSubmit=(e, navigate)=>{
     e.preventDefault()
    setUser(valueInput)
    navigate()
}
    const handleValue=({target})=>{
        setValueInput({[target.name]:target.value})
    }

    const value={
        user, setUser, handleValue, handleSubmit
    }
    console.log(user)
   return (< ContextValue.Provider value={value}>
       {props.children}
   </ContextValue.Provider>)

}

export {ContextValue, ContextProvider}
