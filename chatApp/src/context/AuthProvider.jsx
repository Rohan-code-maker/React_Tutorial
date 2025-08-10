import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const initialuserState = localStorage.getItem("ChatApp");

    //parse the user data and storing in state
    const [authUser, setAuthUser] = useState(initialuserState ? JSON.parse(initialuserState) : undefined);

    // const logout = async () => {
    //     try {
    //         const res = await axios.post("http://localhost:8080/api/v1/users/logout", {}, {
    //             withCredentials: true // Ensure cookies are sent with the request
    //         });
    //         if (res.data.statusCode === 200) {
    //             toast.success("Logged out successfully");
    //             localStorage.removeItem("ChatApp");
    //             setAuthUser(undefined);
    //         } else {
    //             toast.error("Logout failed");
    //         }
    //     } catch (error) {
    //         toast.error(error.response?.data?.message || "Logout failed");
    //     }
    // };

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default AuthProvider;