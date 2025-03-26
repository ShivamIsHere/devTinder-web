import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = ({ toggleForm }) => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/login`, { emailId, password }, { withCredentials: true });
      dispatch(addUser(res.data)); 
      navigate("/feed"); 
    } catch (err) {
      setErrorMessage(err?.response?.data?.message || "Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col mx-auto w-96">
      <h2 className="text-3xl font-bold">Login</h2>
      <p className="text-gray-500">Welcome back, please enter your details.</p>

      <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          className="input-field"
          placeholder="Enter your email"
        />

        <label>Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Enter your password"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-gray-500">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button className="btn-primary" type="submit">Login</button>
      </form>

      <p className="text-center text-gray-500 mt-4">
        Don't have an account?{" "}
        <span className="text-blue-600 cursor-pointer" onClick={toggleForm}>
          Sign up for free.
        </span>
      </p>
    </div>
  );
};

export default Login;
