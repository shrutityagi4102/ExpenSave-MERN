import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { signup } from "../../APIs/SignupAPI";
import helpImg from "../../image/moneybag.jpg";

const Signup = ({ loggedin, setLogin }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [householdKey, setHouseholdKey] = useState("");

  const navigate = useNavigate();

  const submit = async () => {
    console.log("here");
    await signup(email, fullName, password, householdKey);
    setLogin(true);
    navigate("../PsDash", { replace: true });
  };

  useEffect(() => {
    if (loggedin) {
      navigate("../PsDash", { replace: true });
    }
  });

  return (
    <>
     <div className='grid grid-cols-2 gap-2'>
        <div className='pr-10 mr-6 drop-shadow-lg'>
          <img src={helpImg} className='im'></img>
        </div>
        <div className="h-[800px] bg-50 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <div className="text font-extrabold text-4xl py-2">
              {" "}
              Sign Up To Your Account{" "}
            </div>
            <div className="text-2xl font-medium text-gray-900 mt-2 text-center ">
              {" "}
              Already have an account?{" "}
              <a className="text-[#22a7ff]" href="/signin">
                Log In
              </a>
            </div>
          </div>
          <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
            <form
              action=""
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <div>
                <label
                  htmlFor=""
                  className="text-sm text-left font-bold text-gray-600 block"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  onChange={(changeEvent) =>
                    setFullName(changeEvent.target.value)
                  }
                  value={fullName}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-sm text-left font-bold text-gray-600 block"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  onChange={(changeEvent) => setEmail(changeEvent.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-sm text-left font-bold text-gray-600 block"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1 "
                  onChange={(changeEvent) =>
                    setPassword(changeEvent.target.value)
                  }
                  value={password}
                />
              </div>
              {/* <div>
                <label
                  htmlFor=""
                  className="text-sm text-left font-bold text-gray-600 block"
                >
                  House Hold Key
                </label>
                <input
                  type="text"
                  placeholder="Optional"
                  className="w-full p-2 border border-gray-300 rounded mt-1 "
                  onChange={(changeEvent) =>
                    setHouseholdKey(changeEvent.target.value)
                  }
                  value={householdKey}
                />
              </div> */}
              {/* <div className='flex items-center justify-between'>
              <div>
                  <a href="/help" className='font-medium text-sm text-[#8b74bd]'>Don't have a Household Key yet?</a>
              </div>
              </div> */}
              <div>
                <button className="w-full py-2 px-4 bg-[#22a7ff] hover:bg-[#22a7ff] rounded-md text-white text-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
