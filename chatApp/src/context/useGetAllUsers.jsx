import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Cookies from 'js-cookie'

function useGetAllUsers() {
    const [allusers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const token = Cookies.get("accessToken");
                const res = await axios.get('/api/v1/chats', {
                    credentials: "include",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setAllUsers(res.data);
            } catch (error) {
                toast.error("Users fetching failed");
            } finally {
                setLoading(false);
            }
        }
        getUsers;
    }, [])
    return [allusers, loading];

}

export default useGetAllUsers
