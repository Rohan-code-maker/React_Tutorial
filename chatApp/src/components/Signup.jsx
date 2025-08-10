import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';
import { Link,useNavigate } from 'react-router-dom';


function Signup() {
    const [loading, setLoading] = useState(false);
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()

    //watch the password and confirm password field
    const password = watch("password", "");

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const res = await axios.post("api/v1/users/register", data);
            if (res.data.success) {
                toast.success("Signup success");
                navigate("/login")
            } else {
                toast.error("Something went wrong");
            }
        } catch (err) {
            if (err.response && err.response.data && !err.response.data.success) {
                toast.error(err.response.data.message || "Signup failed");
            } else {
                toast.error("An unexpected error occurred");
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
                <h2 className='text-xl text-white font-bold'>Signup</h2>
                <fieldset className="fieldset">
                    <input type="text" className="input w-sm" placeholder="Username" {...register("username", {
                        required: "Username is required", pattern: {
                            value: /^[a-z]+$/,  // Only lowercase letters
                            message: "Only lowercase letters are allowed",
                        }
                    })} />
                    {errors.username && <span className='text-red-500 text-sm'>{errors.username.message}</span>}
                </fieldset>

                <fieldset className="fieldset">
                    <input type="email" className="input w-sm" placeholder="Email" {...register("email", {
                        required: "Email is required", pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address"
                        }
                    })} />
                    {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                </fieldset>

                <fieldset className="fieldset">
                    <input type="password" className="input w-sm" placeholder="Password" {...register("password", {
                        required: "Password is required", minLength: {
                            value: 4,
                            message: "Password must be at least 4 characters"
                        }
                    })} />
                    {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
                </fieldset>

                <fieldset className="fieldset">
                    <input type="password" className="input w-sm" placeholder="Confirm Password" {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                            value === password || "Passwords does not match",
                    })} />
                    {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}
                </fieldset>

                <div className='flex items-center justify-around'>
                    <div className='flex space-x-1'>
                        <p>Already have an account?</p>
                        <Link className='text-blue-600 hover:underline hover:text-blue-800 cursor-pointer' to={"/login"}>Login</Link>
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
                            "SignUp"
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signup
