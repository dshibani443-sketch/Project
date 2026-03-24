import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import spend from "../assets/images/spend.png";

import logo from "../assets/images/logo.png";
import { FaCheck } from "react-icons/fa";
import API from "../services/api";



function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");



    // const [email, setEmail] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    const validateEmail = () => {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(form.email.trim())) {
            alert("Please enter a valid email address");
            return false;
        }
        return true;
    };
    const validatePassword = () => {
        const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

        if (!regex.test(form.password)) {
            alert("Password must contain:At least 8 charracter and A special charracter");
            return false;
        };
        return true;
    };

    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.username || !form.email || !form.password) {
            alert("All fields required");
            return;
        }

        if (!validateEmail()) return;
        if (!validatePassword()) return;

        if (form.password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            console.log("Sending:", form);

            const res = await API.post("/auth/register", form);

            console.log("Response:", res.data);

            alert("Registration Successful 🎉");

            navigate("/"); // go to login
        } catch (err) {
            console.log(err);
            alert("Registration Failed ❌");
        }
    };

    return (
        <>



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
                                <form onSubmit={handleSubmit}>
                                    <div className="bg-gray-100 w-95 rounded-xl p-2 flex items-center  text-xl mb-4 ">
                                        <FaUser className="text-gray-400 m-2" />
                                        <input type="text" onChange={handleChange} placeholder='Enter your name' name='username' required className='outline-none w-95' />
                                    </div>
                                    <div className="bg-gray-100 w-95 rounded-xl p-2 flex items-center  text-xl mb-4 ">
                                        <MdEmail className="text-gray-400 m-2" />
                                        <input type="email" placeholder='Email' name='email' onChange={handleChange}
                                            required className='outline-none' />
                                    </div>
                                    <div className="bg-gray-100 w-95 rounded-xl p-2 flex items-center  text-xl mb-4 ">
                                        <FaLock className="text-gray-400 m-2" />
                                        <input type="password" placeholder=' Enter Password' name="password" onChange={handleChange} required className='outline-none' />
                                    </div>
                                    <div className="bg-gray-100 w-95 rounded-xl p-2 flex items-center text-xl mb-4">
                                        <FaLock className="text-gray-400 m-2" />
                                        <input
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="confirmPassword"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                            className="outline-none"
                                        />
                                    </div>
                                    <div className='leading-5'>
                                        <button type="submit" className=' w-90 rounded-xl px-12 py-2  inline-block font-semibold text-white bg-blue-600 hover:bg-green-500 hover:text-white '>Sign up →
                                        </button>
                                    </div>
                                </form>

                                <div className="flex items-center w-90 mt-5">
                                    <div className="flex-grow border-t border-gray-400"></div>

                                    <span className="mx-4 text-gray-600 text-sm">OR CONTINUE WITH</span>

                                    <div className="flex-grow border-t border-gray-400"></div>
                                </div>

                                <div className="flex items-center justify-center border-gray-400  p-2 shadow-md rounded-xl my-2 w-90 mt-10">
                                    <a href=" https://smartspend-ai-68ou.onrender.com/auth/google" className=' flex '>
                                        <FcGoogle className='text-2xl ' />
                                        <span className='ml-1'>Continue with Google</span>
                                    </a>
                                </div>






                                <div className="mt-3 flex gap-2">Already have an Account!
                                    <NavLink to="/" className='text-blue-500 underline'>Login</NavLink>
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
                            <h4 className=' text-xl'><FaCheck className='relative left-[60px] top-[20px] text-sm' />Track Expenses</h4>

                            <h4 className=' text-xl'><FaCheck className='relative left-[60px] top-[20px] text-sm' /><span className='relative left-[40px]'> Predict future spending</span></h4>
                            <h4 className=' text-xl'><FaCheck className='relative left-[60px] top-[20px] text-sm' /> <span className='relative left-[30px]'>Secure your finances</span></h4>
                        </div>
                    </div>

                </div>
            </main >
        </>
    )
}

export default Register;
