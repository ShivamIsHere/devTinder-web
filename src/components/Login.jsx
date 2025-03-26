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
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2 bg-base-200">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-16 mt-6">
          <p className="text-left text-3xl font-bold">Welcome 🙏, DevTinder</p>
          <p className="mt-2 text-left text-gray-500">Welcome back, please enter your details.</p>

          <form className="flex flex-col pt-4 space-y-4" onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="input input-bordered w-full max-w-xs"
              placeholder="Email"
            />

            <label>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
                placeholder="Password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-gray-500">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <button className="btn btn-primary w-full" type="submit">Login</button>
          </form>

          <p className="m-auto cursor-pointer py-2 text-gray-500">
            Don't have an account? <span className="text-blue-500 underline cursor-pointer" onClick={toggleForm}>Sign up for free.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
