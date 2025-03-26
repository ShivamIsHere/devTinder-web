import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const SignUp = ({ toggleForm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/signup`, { emailId, password, firstName, lastName, age, gender }, { withCredentials: true });
      dispatch(addUser(res.data)); 
      navigate("/profile"); 
    } catch (err) {
      setErrorMessage(err?.response?.data?.message || "Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2 bg-base-200">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-16 mt-6">
          <p className="text-left text-3xl font-bold">Register</p>
          <p className="mt-2 text-left text-gray-500">Create your account and get started.</p>

          <form className="flex flex-col pt-4 space-y-4" onSubmit={handleSignUp}>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input input-bordered w-full max-w-xs" placeholder="First Name" />

            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input input-bordered w-full max-w-xs" placeholder="Last Name" />

            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="input input-bordered w-full max-w-xs">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label>Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="input input-bordered w-full max-w-xs" placeholder="Age" />

            <label>Email</label>
            <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input input-bordered w-full max-w-xs" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" placeholder="Enter your password" />

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <button className="btn btn-primary w-full" type="submit">Sign Up</button>
          </form>

          <p className="m-auto cursor-pointer py-2 text-gray-500">
            Already have an account? <span className="text-blue-500 underline cursor-pointer" onClick={toggleForm}>Login Here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
