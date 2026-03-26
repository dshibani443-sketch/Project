import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from 'react'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Forgotpass from "./pages/Forgotpass";
import VerifyOTP from "./pages/Verifyotp";
import NewPassword from "./pages/Newpassword";
import Income from "./pages/Income";
import Expense from "./pages/Expense";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" 
          element={
                <ProtectedRoute>
                  <Dashboard/>
                </ProtectedRoute>
          } />
          <Route path="/Forgotpass" element={<Forgotpass/>}/>
          <Route path="/Verifyotp" element={<VerifyOTP/>}/>
          <Route path="/Newpassword" element={<NewPassword/>}/>
          <Route path="/Income" element={<Income/>}/>
          <Route path="/Expense" element={<Expense/>}/>
          
        </Routes>
      </BrowserRouter>
      
    </>

  )
}


export default App;
