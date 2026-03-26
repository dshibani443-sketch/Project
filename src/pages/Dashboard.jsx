import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
// import Mainbody from '../components/Mainbody'
import Cards from '../components/Cards'


function Dashboard() {
  return (
    <>
    
       <div className="flex h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <Cards />

      </div>

    </div>

    </>
  )
}

export default Dashboard
