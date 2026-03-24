import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from 'react'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Forgotpass from "./pages/Forgotpass";
import VerifyOTP from "./pages/Verifyotp";
import NewPassword from "./pages/Newpassword";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" 
          element={
                <protectedRoute>
                  <Dashboard/>
                </protectedRoute>
          } />
          <Route path="/Forgotpass" element={<Forgotpass/>}/>
          <Route path="/Verifyotp" element={<VerifyOTP/>}/>
          <Route path="/Newpassword" element={<NewPassword/>}/>
          
        </Routes>
      </BrowserRouter>
      
    </>

  )
}


export default App;
