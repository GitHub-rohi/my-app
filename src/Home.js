import React, { useContext } from "react";
import { useState } from "react";
import {AppContext} from './App'
function Home (){
    const {username} = useContext(AppContext)
    return(
        <>
            <h1>
                this is home page {{username}}
            </h1>
        </>
    )
}
export default Home