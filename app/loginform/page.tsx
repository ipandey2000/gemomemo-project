"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation after login

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter(); // For redirecting

  useEffect(() => {
    // Redirect to home if token exists
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/"); // Redirect to home if already logged in
    }
  }, [router]);

  const generateToken = (): string => {
    return Math.random().toString(36).substr(2);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "rahul@2021" && password === "rahul") {
      const token = generateToken();
      localStorage.setItem("authToken", token);
      console.log("Login successful, Token:", token);

      router.push("/"); // Redirect to home after successful login
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm">{errorMessage}</div>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-2 px-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
