import { createContext, useState } from "react";

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})
    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }