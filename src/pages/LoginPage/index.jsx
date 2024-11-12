"use client";

import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";
export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("handleSubmit", email, password);
    console.log(rememberMe);
    e.preventDefault();
    const isAuthenticated = login(email, password);
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      localStorage.setItem("rememberMe", rememberMe);
      setError("");
      if (!isAuthenticated) {
        setError("Invalid username or password");
      } else {
        navigate("/");
        setError("");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="email">
            <Form.Label className="sr-only">Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className="sr-only">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </Form.Group>
          <div className="flex items-center justify-between">
            <Form.Group controlId="remember-me" className="flex items-center">
              <Form.Check
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Form.Label className="ml-2 mb-0 mt-2 block text-sm text-gray-900">
                Remember me
              </Form.Label>
            </Form.Group>
          </div>
          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
