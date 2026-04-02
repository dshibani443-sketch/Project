import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser, FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import spend from "../assets/images/spend.png";
import logo from "../assets/images/logo.png";
import API from "../services/api";

//02.04.2026 add by suman


function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");

    // 👁️ toggle states
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

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
            alert("Password must contain: 8 characters, 1 uppercase, 1 number, 1 special character");
            return false;
        }
        return true;
    };

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
            const res = await API.post("/auth/register", form);
            alert("Registration Successful 🎉");
            navigate("/");
        } catch (err) {
            if (err.response) {
                alert(err.response.data.detail);
            } else {
                alert("Server error");
            }
        }
    };

    return (
        <main className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='bg-white rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden'>
                <div className='w-full md:w-1/2 p-6 md:p-10 '>
                    <div className=" mx-10" style={{
                        width: "70px",
                        height: "70px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${logo})`
                    }}>
                        <span className='text-2xl font-bold relative left-[60px] top-[18px]'>SmartSpend</span><span className='text-left text-2xl font-bold text-blue-400 relative left-[65px] top-[18px]'>AI</span>
                    </div>
                    <div className="py-1">
                        <h2 className="text-3xl mb-2">Create Account </h2>
                        <p className='leading-[3]'>Sign up to get started</p>

                        <div className="flex flex-col items-center">
                            <form onSubmit={handleSubmit}>
                                {/* <div className="bg-gray-100 w-95 rounded-xl p-2 flex items-center  text-xl mb-4 ">
                                            <MdEmail className="text-gray-400 m-2" />
                                            <input type="email" onChange={handleChange} placeholder='Email' name='email' required className='outline-none w-95' />
                                        </div> */}
                                <div className="relative w-95 mb-4">
                                    <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                                    <input
                                        id="username"
                                        type="text"
                                        name="username"
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                        className="peer w-full border border-gray-300 rounded-xl pl-10 pr-4 pt-6 pb-2 outline-none focus:border-blue-500"
                                    />

                                    <label
                                        htmlFor="username"
                                        className="absolute left-10 top-2 text-gray-500 text-sm transition-all cursor-text
                                                peer-placeholder-shown:top-4
                                                peer-placeholder-shown:text-base
                                                peer-focus:top-2
                                                peer-focus:text-sm
                                                peer-focus:text-blue-500">
                                        Username
                                    </label>
                                </div>
                                <div className="relative w-95 mb-4">
                                    <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                        className="peer w-full border border-gray-300 rounded-xl pl-10 pr-4 pt-6 pb-2 outline-none focus:border-blue-500"
                                    />

                                    <label
                                        htmlFor="email"
                                        className="absolute left-10 top-2 text-gray-500 text-sm transition-all cursor-text
                                                peer-placeholder-shown:top-4
                                                peer-placeholder-shown:text-base
                                                peer-focus:top-2
                                                peer-focus:text-sm
                                                peer-focus:text-blue-500">
                                        Email
                                    </label>
                                </div>
                                {/* <div className="bg-gray-100 w-95 rounded-xl p-2 flex items-center  text-xl mb-4 ">
                                            <FaLock className="text-gray-400 m-2" />
                                            <input type="password" onChange={handleChange} placeholder='password' name='password' required className='outline-none w-95' />
                                        </div> */}

                                {/* //password */}
                                <div className="relative w-95 mb-4">
                                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                        className="peer w-full border border-gray-300 rounded-xl pl-10 pr-10 pt-6 pb-2 outline-none focus:border-blue-500"
                                    />

                                    <label
                                        htmlFor="password"
                                        className="absolute left-10 top-2 text-gray-500 text-sm transition-all cursor-text
                                                peer-placeholder-shown:top-4
                                                peer-placeholder-shown:text-base
                                                peer-focus:top-2
                                                peer-focus:text-sm
                                                peer-focus:text-blue-500">
                                        Enter Password
                                    </label>

                                    <div
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>

                                {/* confirm password */}

                                <div className="relative w-95 mb-4">
                                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                                    <input
                                        id="confirmPassword"
                                        type={showConfirm ? "text" : "password"}
                                        name="confirmPassword"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        placeholder=" "
                                        className="peer w-full border border-gray-300 rounded-xl pl-10 pr-10 pt-6 pb-2 outline-none focus:border-blue-500"
                                    />

                                    <label
                                        htmlFor="confirmPassword"
                                        className="absolute left-10 top-2 text-gray-500 text-sm transition-all cursor-text
                                                peer-placeholder-shown:top-4
                                                peer-placeholder-shown:text-base
                                                peer-focus:top-2
                                                peer-focus:text-sm
                                                peer-focus:text-blue-500">
                                        Confirm Password
                                    </label>

                                    <div
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                                        onClick={() => setShowConfirm(!showConfirm)}
                                    >
                                        {showConfirm ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>




                                <div className="flex w-95 mb-5 justify-between leading-1">
                                    <label className='flex items-center text-black'>
                                        <input type="checkbox" name='remember' className='mr-1' />
                                        Remember Me</label>
                                    <NavLink to="/Forgotpass" className='text-blue-600'>Forgot Password?</NavLink>
                                </div>
                                <div className='leading-5'>
                                    <button type='submit' className=' w-90 rounded-xl px-12 py-2  inline-block font-semibold text-white bg-blue-600 hover:bg-green-500 hover:text-white  cursor-pointer '>Sign in →
                                    </button>
                                </div>
                            </form>

                            <div className="flex items-center w-90 mt-5">
                                <div className="flex-grow border-t border-gray-400"></div>

                                <span className="mx-4 text-gray-600 text-sm">OR CONTINUE WITH</span>

                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>

                            <div className="flex items-center justify-center border-gray-400  p-2 shadow-md rounded-xl my-2 w-90 mt-10">
                                <a href="https://smartspend-ai-68ou.onrender.com/auth/google" className=' flex '>
                                    <FcGoogle className='text-2xl ' />
                                    <span className='ml-1'>Continue with Google</span>
                                </a>
                            </div>
                            <div className='mt-4'>Already have an account?
                                <NavLink to="/" className='text-blue-500 underline'>Sign in</NavLink>
                            </div>




                        </div>
                    </div>
                </div>
                <div
                    className="hidden md:flex w-1/2 text-white"
                    style={{
                        backgroundImage: `url(${spend})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="p-6 rounded-xl">
                        <h2 className="text-4xl mb-4">
                            SmartSpend <span className="text-blue-300">AI</span>
                        </h2>

                        <p className="flex items-center mb-2">
                            <FaCheck className="mr-2" /> Track Expenses
                        </p>
                        <p className="flex items-center mb-2">
                            <FaCheck className="mr-2" /> Predict future Spending
                        </p>
                        <p className="flex items-center">
                            <FaCheck className="mr-2" /> Secure your Finances
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Register;