import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log({
      email: email,
      password: password,
    });
  };

  return (
    <form>
      <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </form>
  );
}
