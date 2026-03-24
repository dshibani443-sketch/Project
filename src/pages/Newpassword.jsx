import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


function NewPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const resetToken = sessionStorage.getItem("reset_token");

            const res = await API.post("/auth/reset-password", {
                new_password:password,
                reset_token: resetToken
            });
            console.log(resetToken);
            console.log(res);
            

            alert("Password updated successfully ✅");

            // optional: remove token after use
            sessionStorage.removeItem("reset_token");

            navigate("/");

        } catch (error) {
            alert(error.response?.data?.message || "Error updating password");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="p-8 rounded-2xl shadow-2xl flex flex-col items-center w-150 h-80">
                <h2 className="text-4xl font-semibold text-amber-400 mb-4">
                    Create New Password
                </h2>

                <div className="bg-gray-100 w-90 p-3 rounded-xl flex flex-col mt-3">
                    <input
                        type="password"
                        placeholder="New Password"
                        className="outline-none w-90"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="bg-gray-100 w-90 p-3 rounded-xl flex flex-col mt-3">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="outline-none w-90"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-40 mt-10 bg-indigo-600 text-white py-2 rounded-xl hover:bg-green-400"
                >
                    Update Password
                </button>
            </div>
        </div>
    );
}

export default NewPassword;