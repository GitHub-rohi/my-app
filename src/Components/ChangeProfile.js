import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function ChangeProfile (){
    const{setusername}  =useContext(AppContext)
    const [newuser,setnewuser] = useState("")
    return(
        
        <>
        <div>
        
        <input 
        onChange={(event)=>{
            setnewuser(event.target.value)
            
            }}/>
        <button 
        onClick={()=>{
           setusername(newuser)
            }}> 
            change username
            </button>
        </div>
        </>
    )
}
export default ChangeProfile