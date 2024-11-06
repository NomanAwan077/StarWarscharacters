import React, { createContext, useContext, useEffect, useState } from "react";

const MOCK_USERNAME = "Noman";
const MOCK_USEREMAIL = "admin@admin.com";
const MOCK_PASSWORD = "admin";
const ACCESS_TOKEN_EXPIRY = 5 * 60 * 1000;
const CHECK_TOKEN_INTERVAL = 3 * 10 * 1000;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("accessToken") || null;
  });
  const [tokenExpiry, setTokenExpiry] = useState(() => {
    return localStorage.getItem("tokenExpiry") || null;
  });

  const login = (email, password) => {
    if (email === MOCK_USEREMAIL && password === MOCK_PASSWORD) {
      const newAccessToken = "mockAccessToken";
      const expiryTime = Date.now() + ACCESS_TOKEN_EXPIRY;
      setAccessToken(newAccessToken);
      setTokenExpiry(expiryTime);
      return true;
    }
    return false;
  };

  const logout = () => {
    setAccessToken(null);
    setTokenExpiry(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenExpiry");
  };
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("tokenExpiry", tokenExpiry);
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("tokenExpiry");
    }
  }, [accessToken, tokenExpiry]);
  useEffect(() => {
    const checkTokenExpiration = () => {
      const currentTime = Date.now();
      if (tokenExpiry && currentTime > tokenExpiry) {
        refreshAccessToken();
      }
    };

    const interval = setInterval(checkTokenExpiration, CHECK_TOKEN_INTERVAL);

    return () => clearInterval(interval);
  }, [tokenExpiry]);
  const refreshAccessToken = () => {
    console.log("Refreshing access token...");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenExpiry");
    // const newAccessToken = "newMockAccessToken";
    // const newExpiryTime = Date.now() + ACCESS_TOKEN_EXPIRY;
    // setAccessToken(newAccessToken);
    // setTokenExpiry(newExpiryTime);
  };

  return (
    <AuthContext.Provider value={{ login, logout, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
