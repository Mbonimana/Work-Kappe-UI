import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { useCart } from "../CartContext";

interface FormData {
  email: string;
  password: string;
}

// ✅ Type for Axios login response
type LoginResponse = {
  existingUser: {
    _id: string;
    email: string;
    userRole: "admin" | "client";
    accessToken?: string;
    [key: string]: any; // for any other fields returned
  };
  accessToken?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { fetchCart } = useCart(); // fetch cart after login

  const onLogin = async (data: FormData) => {
    try {
      // ✅ Type the response
      const res = await axios.post<LoginResponse>(
        `https://kappebackend.onrender.com/api/user/userLogin`,
        {
          email: data.email,
          password: data.password,
        }
      );

      const user = res.data.existingUser;
      const token = res.data.accessToken || user.accessToken;

      // ✅ Ensure token is a string
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token || ""); // fix TS2345

      // ✅ fetch the cart for this logged-in user
      await fetchCart();

      if (user.userRole === "admin") navigate("/dashboard");
      else navigate("/");

      Notify.success("Login Successful");
      reset();
    } catch (error) {
      console.error("Login failed", error);
      Notify.failure("Login Failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-[10%] px-4  md:space-y-0">
  {/* Left Panel */}
  <div className="w-full max-w-sm bg-yellow-400 text-black p-6 rounded-md flex flex-col justify-center md:min-h-[18rem]">
    <h1 className="text-[1.6rem] font-semibold">Login</h1>
    <p className="text-sm">Get Access to your Orders,</p>
    <p className="text-sm">Wishlist and Recommendations,</p>
  </div>

  {/* Right Panel */}
  <div className="w-full max-w-sm bg-white-blue-500 text-white p-4 border border-gray-200 shadow-sm rounded-md md:min-h-[18rem] flex items-center md:-ml-[1px]">
    <form onSubmit={handleSubmit(onLogin)} className="w-full">
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Enter Username/ Email Address"
          className="border mt-2 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
          {...register("email")}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="border mt-3 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
          {...register("password")}
        />
        <div className="flex flex-row justify-between text-sm font-bold mt-3">
          <div className="text-blue-500 flex items-center">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-yellow-400 ml-1">
              Remember Me
            </label>
          </div>
          <Link to="../forgotpassword" className="text-yellow-400 ml-1">Forgot Password</Link>
        </div>

        <button
          type="submit"
          className="border mt-2 bg-yellow-400 h-[2.5rem] w-full text-black text-sm font-semibold hover:text-yellow-400 hover:bg-black"
        >
          Login
        </button>

        <Link to="../Registration" className="mt-2 block text-center">
          <span className="text-yellow-500 text-sm">
            Don't have account? Sign Up
          </span>
        </Link>
      </div>
    </form>
  </div>
</div>
  );
};

export default Login;
