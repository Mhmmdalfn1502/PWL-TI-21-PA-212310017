import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("Febry");
  const [password, setPassword] = useState("12345678");
  const navigate = useNavigate(); // Mendapatkan fungsi navigate dari react-router-dom

  // Fungsi untuk menangani login dan navigasi
  const handleLogin = () => {
    // Logika validasi login
    if (username === "Febry" && password === "12345678") {
      // Navigasi ke halaman chapter-2 jika login berhasil
      navigate("/chapter-2");
    } else {
      // Tambahkan logika untuk menangani kesalahan login jika diperlukan
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <form className="border border-1 p-3 row rounded rounded-4" style={{ width: "50%" }}>
          <div className="text-center">
            <h2 className="fw-bold">Sign In</h2>
            <p>Enter using your IBIK Account</p>
          </div>
          <label className="mt-3">Username</label>
          <input
            className="rounded rounded-3 py-2 border border-1"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="mt-3">Password</label>
          <input
            type="password"
            className="rounded rounded-3 py-2 border border-1"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Memanggil fungsi handleLogin saat tombol sign-in diklik */}
          <button
            className="mt-5 rounded rounded-3 py-2 border border-1 bg-primary text-light fw-medium"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <p className="py-5 text-center">Or with AR</p>
          <p className="text-center fw-bold">Sign in with Biometrics</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
