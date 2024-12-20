import React, {createContext, useState, useEffect} from "react";
import { refreshAccessToken } from "../components/authentication/auth";
import {jwtDecode} from "jwt-decode"

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState({
        refreshToken: localStorage.getItem("refreshToken") || null,
        accessToken: localStorage.getItem("accessToken") || null,
      });
      
      // test
      // const test = (token) =>{
      //   const decoode = jwtDecode(token)
      //   console.log("srazuu => ", decoode);
      // }
      // useEffect(()=>{
      //   test(localStorage.getItem("refreshToken") ? localStorage.getItem("refreshToken") : null)
      // }, [auth])

       // isTokenExpired
  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      console.log(decoded);
      
      const currentTime = Date.now() / 1000; // Hozirgi vaqtni sekundda olamiz
      return decoded.exp < currentTime; // Token muddati tugaganmi?
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // Agar token noto'g'ri bo'lsa, uni muddati tugagan deb hisoblaymiz
    }
  };

  // login
  const login = (data) => {
    setAuth({refreshToken: data.refresh, accessToken: data.access});
    localStorage.setItem("accessToken", data.access);
    localStorage.setItem("refreshToken", data.refresh);
  };

  // logout
  const logout = () => {
    setAuth({ accessToken: null, refreshToken: null });
    localStorage.clear();
  };

  // refresh
  const refresh = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
  
    // Refresh token mavjudligini va muddati tugaganligini tekshirish
    if (!refreshToken || isTokenExpired(refreshToken)) {
      logout(); // Muddati tugagan bo‘lsa, logout qilish
      return;
    }
  
    try {
      const newTokens = await refreshAccessToken(refreshToken);
      if (newTokens.access) {
        setAuth((prev) => ({ ...prev, accessToken: newTokens.access }));
        localStorage.setItem("accessToken", newTokens.access);
      } else {
        logout(); // Refresh token noto‘g‘ri bo‘lsa, logout qilish
      }
    } catch (error) {
      console.error("Error refreshing tokens:", error);
      logout();
    }
  };

  useEffect(() => {
    const storedRefreshToken = localStorage.getItem("refreshToken");
    const storedAccessToken = localStorage.getItem("accessToken");
  
    // Tokenlarni tekshirish
    if (storedRefreshToken && !isTokenExpired(storedRefreshToken)) {
      if (storedAccessToken && !isTokenExpired(storedAccessToken)) {
        setAuth({ accessToken: storedAccessToken, refreshToken: storedRefreshToken });
      } else {
        refresh(); // Access token muddati tugagan bo‘lsa, yangilashga urinib ko‘ramiz
      }
    } else {
      logout(); // Refresh token muddati tugagan bo‘lsa, foydalanuvchini tizimdan chiqaramiz
    }
  }, []);

  return (
    <AuthContext.Provider value={{auth, login, logout, refresh}}>
        {children}
    </AuthContext.Provider>
  )

}