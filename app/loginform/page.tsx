"use client";

import { useState, FormEvent, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Login = () =>
{
  const [email, setEmail] = useState<string>( "" );
  const [password, setPassword] = useState<string>( "" );
  const [errorMessage, setErrorMessage] = useState<string>( "" );
  const router = useRouter();

  useEffect( () =>
  {
    const token = Cookies.get( "authToken" );
    if ( token )
    {
      router.push( "/" );
    }
  }, [router] );

  const handleLogin = ( e: FormEvent<HTMLFormElement> ) =>
  {
    e.preventDefault();
    if ( email === "rahul@2021" && password === "rahul" )
    {
      const token = Math.random().toString( 36 ).substr( 2 );
      Cookies.set( "authToken", token );
      router.push( "/" );
    } else
    {
      setErrorMessage( "Invalid email or password" );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              value={email}
              onChange={( e ) => setEmail( e.target.value )}
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
              onChange={( e ) => setPassword( e.target.value )}
              placeholder="Enter your password"
              required
            />
          </div>
          {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 px-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
