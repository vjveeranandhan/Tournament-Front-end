import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import  {BrowserRouter, Routes, Route} from  "react-router-dom";
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import Logout from './Components/Logout/Logout';
import Profile from './Components/Profile/Profile';
import Club from './Components/Club/Club';

function App() {
	return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Navbar/> */}
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/club" element={<Club/>} />
      </Routes>
    </BrowserRouter>
	);
}

export default App;



// import React, { useEffect } from "react";
// import { useForm } from "./useForm";

// function App() {
//   const [value, handleChange] = useForm({
//     name: "",
//     email: "",
//     password: "",
//     confirm_password: ""
//   })

//   useEffect(()=>{
//     console.log("UserEffect")
//     return () => {
//       console.log("Unmount")
//     }
//   }, [])

//   console.log(value.name)
//   console.log(value.email)
//   console.log(value.password)
//   console.log(value.confirm_password)
//   return (
//     <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '200px' }}>
//       <input type="text" name="name" value={value.name} onChange={handleChange}/>
//       <br></br>
//       <input type="text" name="email" value={value.email} onChange={handleChange}/>
//       <br></br>
//       <input type="password" name="password" value={value.password} onChange={handleChange}/>
//       <br></br>
//       <input type="password" name="confirm_password" value={value.confirm_password} onChange={handleChange}/>
//     </div>
//   );
// }

// export default App;