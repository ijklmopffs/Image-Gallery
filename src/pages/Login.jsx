import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const hardcodedEmail = "user@example.com";
    const hardcodedPassword = "1Password";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      loginWithRedirect();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-[90vh]">
      <div className="flex gap-4 items-center">
        <label htmlFor="email" className="font-bold text-2xl">
          Email:
        </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-500 p-2 rounded-md"
        />
      </div>
      <div className="flex gap-4 items-center">
        <label htmlFor="email" className="font-bold text-2xl">
          Password:
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-500 p-2 rounded-md"
        />
      </div>
      <button
        onClick={handleLogin}
        className="border-2 bg-blue-300 p-2 px-10 rounded-md text-white font-bold"
      >
        Log In
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
