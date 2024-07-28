import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test if the email matches the regex pattern
    setEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/;

    setPasswordValid(passwordRegex.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div className="w-full flex h-screen">
        <div className="hidden md:flex w-1/3 bg-[#031434] items-center justify-center px-14">
          <img src="/star_wars.png" alt="star_wars" />
        </div>
        <div className="w-full md:w-2/3 bg-white flex justify-center items-center px-5">
          <form
            className="border-2 border-[#a4a7b76f] rounded-lg w-full md:w-1/2 mx-auto p-10"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-[#434854] font-bold text-3xl">Login</h1>
              <p className="text-[#737373]">
                Kindly enter your details to log in
              </p>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="w-full flex flex-col">
                <label
                  htmlFor="email"
                  className="-mb-4 ml-4 z-10 p-1 bg-white w-fit text-[#B0B9C8]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="outline-none focus:outline-none border-[1px] border-[#A4A7B7] px-4 py-4 rounded-xl focus:border-[#0A74DC] text-[#0B2253]"
                  placeholder="kingsleyomin@enyata.com"
                  required
                />
                {!emailValid && (
                  <p style={{ color: "red" }}>
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="password"
                  className="-mb-4 ml-4 z-10 p-1 bg-white w-fit text-[#B0B9C8]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="peer/email outline-none focus:outline-none border-[1px] border-[#A4A7B7] px-4 py-4 rounded-xl focus:border-[#0A74DC] text-[#0B2253]"
                  placeholder="*********"
                  required
                />
                {!passwordValid && (
                  <p style={{ color: "red" }}>
                    Password must be at least 6 characters long and contain
                    letters, numbers and special character.
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-5 mt-2">
                <button
                  type="submit"
                  disabled={!passwordValid || !emailValid}
                  className={`${
                    emailValid && passwordValid
                      ? "bg-[#0A74DC] cursor-pointer text-white"
                      : "bg-[#30b0f5] cursor-not-allowed text-white"
                  } text-white w-full rounded-md font-bold text-xl py-3`}
                >
                  Log in
                </button>
                <p className="mx-auto text-[#0A74DC]">Forgot your password?</p>
              </div>
            </div>
            <p className="mx-auto mt-20 flex gap-2 justify-center">
              <Link className="text-black underline-offset-2 underline">
                Privacy Policy
              </Link>
              <span className="text-[#B0B9C8]">and</span>
              <Link className="text-black underline-offset-2 underline">
                Terms of services
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
