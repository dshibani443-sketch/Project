import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../services/api";


function VerifyOTP() {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const inputRefs = useRef([]);

    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next box
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async () => {
        const finalOtp = otp.join("");

        if (finalOtp.length !== 6) {
            alert("Enter valid OTP");
            return;
        }

        try {
            const res = await API.post("/auth/verify-otp", {
                email: email,
                otp: finalOtp
            });

            console.log(res.data);

            // ✅ check backend response instead of status
            if (res.data.success) {
                sessionStorage.setItem("reset_token", res.data.reset_token);

                alert(res.data.message || "OTP Verified Successfully");

                navigate("/newpassword", { state: { email } });
            } else {
                alert(res.data.message || "Invalid OTP");
            }

        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <div className="w-180 h-100 flex flex-col items-center bg-white shadow-2xl rounded-2xl">

                <h2 className="text-5xl text-green-600 mt-5">OTP Verification</h2>
                <p className="my-5 text-xl">
                    Please enter the otp sent to your register email to complete your verification.
                </p>

                <div className="flex gap-3 mt-5">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            ref={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleBackspace(e, index)}
                            className="w-12 h-12 text-center border rounded text-lg"
                        />
                    ))}
                </div>

                <div className="flex flex-row justify-between w-95 mt-5 text-sm">
                    <p className="text-gray-500 text-xl">
                        Remaining time: <span className="text-indigo-600">00:59s</span>
                    </p>

                    <button className="text-indigo-600 text-xl">
                        Resend
                    </button>
                </div>

                <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-blue-500 text-white rounded mt-8 hover:bg-amber-600"
                >
                    Verify OTP
                </button>
            </div>
        </div>
    );
}

export default VerifyOTP;