import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { RiLogoutCircleRLine } from "react-icons/ri";
import Cookies from 'js-cookie';
import { useAuth } from '../../context/AuthProvider';


function Search() {

    const [loading, setLoading] = useState(false);
    const [authUser, setAuthUser] = useAuth();

    const logout = async () => {
        setLoading(true);
        try {
            const token = Cookies.get("accessToken");
            const res = await axios.post("api/v1/users/logout", {}, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.data.statusCode === 200) {
                toast.success(res.data.message, { id: "logout" });
                // `id` ensures duplicate toasts aren't shown
                localStorage.removeItem("ChatApp");
                setAuthUser(undefined);
            }
            else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Logout failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='h-[10vh]'>
            <Toaster />
            <div className='flex px-2 py-3 space-x-2'>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
                <button onClick={logout}><RiLogoutCircleRLine className='text-3xl text-white hover:bg-slate-700 rounded duration-300 cursor-pointer' /></button>
            </div>
        </div>
    )
}

export default Search
