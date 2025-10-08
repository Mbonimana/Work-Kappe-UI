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
  <div className="w-full max-w-sm bg-yellow-400 text-black p-6 rounded-md flex flex-col justify-center md:min-h-[20rem]">
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
        <h2 className="text-black  items-center justify-center">OR</h2>
    <button
  type="button"
  onClick={() => window.location.href = "https://kappebackend.onrender.com/api/auth/google"}
  className="mt-2 flex items-center justify-center gap-3 h-[2.5rem] w-full rounded-md border border-gray-300 bg-white text-black text-sm font-medium shadow-sm transition duration-200 hover:bg-gray-100 hover:shadow-md"
>
  {/* Multicolor Google Icon */}
  <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.4H272v95.3h146.9c-6.3 34.1-25.1 62.9-53.4 82.2v68.2h86.3c50.5-46.5 81.7-115.1 81.7-195.3z"/>
    <path fill="#34A853" d="M272 544.3c73.6 0 135.3-24.4 180.4-66.3l-86.3-68.2c-24 16.1-54.7 25.6-94.1 25.6-72.3 0-133.6-48.8-155.5-114.3H28.1v71.7C73.9 475.1 167.6 544.3 272 544.3z"/>
    <path fill="#FBBC05" d="M116.5 321.1c-10.4-30.1-10.4-62.6 0-92.7V156.7H28.1c-36.6 72.3-36.6 158.6 0 230.9l88.4-66.5z"/>
    <path fill="#EA4335" d="M272 107.7c39.9 0 75.8 13.8 104.1 40.9l78.1-78.1C407.3 24.4 345.6 0 272 0 167.6 0 73.9 69.2 28.1 156.7l88.4 71.7C138.4 156.5 199.7 107.7 272 107.7z"/>
  </svg>
  <span>Login with Google</span>
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
