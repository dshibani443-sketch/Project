import React from 'react'
// import News3 from '../images/News3.jpg';
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import spend from "../components/images/spend.png";
import logo from "../components/images/logo.png";
import { FaCheck } from "react-icons/fa";


function Login() {
    return (
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-screen'>
            <div className='rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                <div className='w-3/5  '>
                    <div className=" mx-10" style={{
                        width: "70px",
                        height: "70px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${logo})`
                    }}>
                        <span className='text-2xl font-bold relative left-[60px] top-[18px]'>SmartSpend</span><span className='text-left text-2xl font-bold text-blue-400 relative left-[65px] top-[18px]'>AI</span></div>
                    <div className="py-1">
                        <h2 className="text-3xl   mb-2">Welcome back to <span className='font-bold'>SmartSpend</span></h2>
                        <p className='leading-[3]'>Sign in to continue to your account</p>

                        <div className="flex flex-col items-center">
                            <div className="bg-gray-100 w-95 rounded-xl p-2 flex items-center  text-xl mb-4 ">
                                <MdEmail className="text-gray-400 m-2" />
                                <input type="email" placeholder='Email' name='email' required className='outline-none w-95' />
                            </div>
                            <div className="bg-gray-100 w-95 rounded-xl p-2 flex items-center  text-xl mb-4 ">
                                <FaLock className="text-gray-400 m-2" />
                                <input type="Password" placeholder='Password' name='Password' required className='outline-none w-95' />
                            </div>
                            <div className="flex w-95 mb-5 justify-between leading-1">
                                <label className='flex items-center text-black'>
                                    <input type="checkbox" name='remember' className='mr-1' />
                                    Remember Me</label>
                                <a href="#" className='text-blue-600'>Forgot Password?</a>
                            </div>
                            <div className='leading-5'>
                                <button className=' w-90 rounded-xl px-12 py-2  inline-block font-semibold text-white bg-blue-600 hover:bg-green-500 hover:text-white '>Sign in →
                                </button>
                            </div>

                            <div className="flex items-center w-90 mt-5">
                                <div className="flex-grow border-t border-gray-400"></div>

                                <span className="mx-4 text-gray-600 text-sm">OR CONTINUE WITH</span>

                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>

                            <div className="flex items-center justify-center border-gray-400  p-2 shadow-md rounded-xl my-2 w-90 mt-10">
                                <a href="" className=' flex '>
                                    <FcGoogle className='text-2xl ' />
                                      <span className='ml-1'>Continue with Google</span>
                                </a>
                            </div>
                            <div className='mt-4'>Dont have an Account!
                                <NavLink to="/Register" className='text-blue-500 underline'>Sign up</NavLink>
                            </div>

                            


                        </div>
                    </div>
                </div>
                <div className='w-3/7 rounded-tr-2xl rounded-br-2xl py-36 px-12' style={{
                    width: "450px",
                    height: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url(${spend})`
                }} >
                    <div className='relative right-[70px] bottom-[120px] text-3xl text-white'>
                        <h2>SmartSpend <span className='text-blue-300'>AI</span></h2>
                        <h4 className=' text-xl'><FaCheck className='relative left-[60px] top-[20px] text-sm'/>Track Expenses</h4>
                       
                        <h4 className=' text-xl'><FaCheck className='relative left-[60px] top-[20px] text-sm'/><span className='relative left-[40px]'> Predict future spending</span></h4>
                        <h4 className=' text-xl'><FaCheck className='relative left-[60px] top-[20px] text-sm'/> <span className='relative left-[30px]'>Secure your finances</span></h4>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Login
