import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';
import { Link, Navigate } from 'react-router-dom';



function Login() {
    const [loading, setLoading] = useState(false);
    const [authUser, setAuthUser] = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const { identifier, password } = data;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Transform data: assign identifier to email or username
            const transformedData = {
                password,
                ...(emailRegex.test(identifier) ? { email: identifier } : { username: identifier })
            };

            const res = await axios.post("api/v1/users/login", transformedData);
            if (res.data.success) {
                toast.success(res.data.message);
                localStorage.setItem("ChatApp", JSON.stringify(res.data));
                setAuthUser(res.data);
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            if (error.response?.data && !error.response.data.success) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Login Failed");
            }
        } finally {
            reset();
            setLoading(false);
        }
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <Toaster />
            <form onSubmit={handleSubmit(onSubmit)} className='border border-white px-6 py-2 rounded-2xl space-y-3'>
                <h1 className=' text-2xl text-center'>Chat <span className='text-green-400 font-semibold'>App</span></h1>
                <h2 className='text-xl text-white font-bold'>Login</h2>
                <fieldset className="fieldset">
                    <input
                        type="text"
                        className="input w-sm"
                        placeholder="Email or Username"
                        {...register("identifier", {
                            required: "Email or Username is required",
                            validate: (value) => {
                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                const usernameRegex = /^[a-z]+$/;
                                if (emailRegex.test(value) || usernameRegex.test(value)) {
                                    return true;
                                }
                                return "Enter a valid email or username (lowercase letters only)";
                            }
                        })}
                    />
                    {errors.identifier && <span className='text-red-500 text-sm'>{errors.identifier.message}</span>}
                </fieldset>
                <fieldset className="fieldset">
                    <input type="password" className="input w-sm" placeholder="Password" {...register("password", {
                        required: "Password is required"
                    })} />
                    {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
                </fieldset>
                <div className='flex items-center justify-around'>
                    <div className='flex space-x-1'>
                        <p>New User?</p>
                        <Link className='text-blue-600 hover:underline hover:text-blue-800 cursor-pointer' to={"/signup"}>SignUp</Link>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 rounded-md p-2 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? (
                            <svg
                                className="animate-spin h-5 w-5 text-white inline-block"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                ></path>
                            </svg>
                        ) : (
                            "Login"
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
