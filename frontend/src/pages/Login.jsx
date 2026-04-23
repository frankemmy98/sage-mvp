import { useState } from "react";
import { loginUser } from "../api/auth";
import hatIcon from "../assets/graduation-hat.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await loginUser(email, password);
    console.log(res);
    window.location.href = "/dashboard";
  };

  return (
    <div className="p-6 h-screen bg-[#eef3fc]">
      <div className="grid grid-cols-1 items-center justify-items-center gap-6">
        <div className="grid grid-cols-1 gap-15 items-center justify-items-center">
          <div className="bg-[#d4e3ff] h-15 w-18 rounded-full border-none flex items-center justify-center">
            <img src={hatIcon} className="" alt="Graduation Hat" />
          </div>

          <h1 className="text-[#005dac] text-3xl font-bold">SAGE</h1>

          <p className="text-center text-lg">
            Enter the digital atelier of elite business education.
          </p>
        </div>

        {/* Login Section*/}
        <form onSubmit={handleLogin}>
          <h2>Login</h2>

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
