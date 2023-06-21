// import React from "react";
// import Axios from "axios";
// import { useEffect,useState } from "react";
// function App(){
//   const [name,setname] = useState("")
//   const [predage,setpredage]=useState(null)
//   const  fetchData = ()=>{
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
//       setpredage(res.data)
//       }

//   )}
//   useEffect (()=>{
//     fetchData()
//   },[])
//   return(
//     <>
//       <div>
//       <input placeholder="ex: PREDO"
//        onChange=
//        {(event)=>{
//        setname(event.target.value)}}/>
//       <button onClick={fetchData}>PredictAge</button>
//       <h1>PredictAge:{predage?.age}</h1>
//       <h1>Name:{predage?.name}</h1>
//       <h1>Count:{predage?.count}</h1>
//       </div>
//     </>
//   )
// }
// export default App







import React, { useState, createContext, useContext } from "react";
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Home from "./Home";
import Contact from "./Contact";
import Profile from "./Profile";
export  const AppContext = createContext()
function App(){
  const [username,setusername] = useState("Rohi")
  return(
    <>
    <AppContext.Provider value={{username,setusername}}>
      <Router>
      <div> Navbar
      <Link to="/">Home</Link>
      <Link to="/profile">Menus</Link>
      <Link to="/contact">Contact</Link>
       </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile"  element={<Profile/>}/>
          <Route path="/contact"  element={<Contact />}/>
          <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </>
  )
}
export default App