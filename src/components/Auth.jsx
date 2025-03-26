import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 flex justify-center items-center bg-base-200">
        {isLoginForm ? <Login toggleForm={() => setIsLoginForm(false)} /> : <SignUp toggleForm={() => setIsLoginForm(true)} />}
      </div>

      <div className="hidden md:block md:w-1/2 h-screen">
        <img className="h-full w-full object-cover opacity-90"
          src={isLoginForm 
            ? "https://i.pinimg.com/originals/06/aa/40/06aa408f09f394c3b46d6cbe1efad944.gif" 
            : "https://i.pinimg.com/originals/a4/07/22/a4072206392b57e4b3ede6588e81d7f3.gif"}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Auth;
