import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const response = await fetch("http://localhost:3011/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }),
      });
      if (!response.ok) {
        setError("Invalid credentials");
      } else {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
    } catch (err) {
      setError("Failed to login. Try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex-1 flex justify-center items-start pt-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg p-8 bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">
            Login
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border bg-gray-900 text-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border bg-gray-900 text-gray-300 rounded-md"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-gray-300"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
