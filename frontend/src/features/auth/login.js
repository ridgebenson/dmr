import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false); // New state for login error
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/auth/login", {
                email,
                password,
            });
            if (res.data) {
                navigate("/dash"); // Redirect only on successful login
            } else {
                setLoginError(true); // Show error message
            }
        } catch (err) {
            console.log(err);
            setLoginError(true); // Show error message
        }
    };

    return (
        <>
            <Navbar />
            <div className="mainLogin">
                <div className="loginMajor">
                    <h2 style={{ color: "#1B4552", textAlign: "center", marginTop: "5px" }}>Login</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                placeholder="Enter Password"
                                name="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>

                    <p style={{ color: "#1B4552", textAlign: "center", margin: "10px" }}>Don't have an account?</p>
                    <div style={{ textAlign: "center", margin: "10px" }}>
                        <Link to="/register" style={{ color: "#1B4552" }}>
                            Sign Up
                        </Link>
                    </div>

                    {loginError && <p style={{ color: "red", textAlign: "center" }}>Incorrect email or password</p>}
                </div>
            </div>
        </>
    );
};

export default Login;
