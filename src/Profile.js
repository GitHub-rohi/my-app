import React, { useContext } from "react";
import ChangeProfile from "./Components/ChangeProfile";
import { AppContext } from "./App";

function Profile(){
    const {username} = useContext(AppContext)
    return(
        <>
        <div> 
        {""}     
                this is Profile page {username}   
 <ChangeProfile/>              
    </div>

        </>
    )
}
export default Profile