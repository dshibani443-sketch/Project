import { useEffect, useState } from "react";
import { Search, Bell, Moon } from "lucide-react";

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="w-full h-16 px-6 flex items-center justify-between
                    bg-white text-black
                    dark:bg-slate-900 dark:text-white
                    border-b border-slate-200 dark:border-slate-700">

            {/* Search */}
            <div className="flex items-center gap-2 
                      bg-gray-100 dark:bg-slate-800 
                      px-3 py-2 rounded-lg w-96">
                <Search size={25} className="text-slate-500" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none w-full text-sm"
                />
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-5">

                {/* Notification */}
                <Bell className="cursor-pointer" size={25} />

                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer"
                >
                    <Moon size={25} />
                </button>

                {/* User Name */}
                <span className="font-medium">John Doe</span>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="user"
                    className="w-8 h-8 rounded-full"
                />

            </div>
        </div>
    );
}

export default Header;