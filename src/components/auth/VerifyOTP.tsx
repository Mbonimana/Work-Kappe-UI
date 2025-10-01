import { useForm } from "react-hook-form"; 
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate, useLocation } from "react-router-dom";


interface FormData {
  email: string;
  otp: string;
  newPassword: string;
  confirmPassword: string;
}
interface ResetPasswordResponse{
  message:string;
}

const VerifyOTP = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromState = (location.state as any)?.email || "";

  const onSubmit = async (data: FormData) => {
    try {
      // Basic validation before sending
      if (!data.email || !data.otp || !data.newPassword || !data.confirmPassword) {
        Notify.warning("Please fill in all fields.");
        return;
      }
      if (data.newPassword !== data.confirmPassword) {
        Notify.warning("Passwords do not match.");
        return;
      }

      
const res = await axios.post<ResetPasswordResponse>(
  "http://localhost:5000/api/user/reset-password",
  {
    email: data.email,
    otp: data.otp,
    newPassword: data.newPassword,
    confirmPassword: data.confirmPassword,
  }
);

Notify.success(res.data.message || "Password reset successful");
      reset();
      navigate("/login"); // redirect to login

    } catch (error: any) {
      console.error("Reset failed:", error);

      // Check if error is Axios error
      if (axios.AxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message;

        switch (status) {
          case 400:
            Notify.failure(message || "Invalid request. Check your inputs.");
            break;
          case 404:
            Notify.failure(message || "User not found.");
            break;
          case 500:
            Notify.failure(message || "Server error. Please try again later.");
            break;
          default:
            Notify.failure(message || "Something went wrong. Try again.");
        }
      } else {
        // Non-Axios errors (network issues, etc.)
        Notify.failure("Network error. Please check your connection.");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-[10%] px-4">
      <div className="w-full max-w-sm bg-yellow-400 text-black p-6 rounded-md">
        <h1 className="text-[1.6rem] font-semibold">Reset Password</h1>
        <p className="text-sm">Enter OTP & new password</p>
      </div>

      <div className="w-full max-w-sm bg-white p-4 border border-gray-200 shadow-sm rounded-md -mt-[1px]">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="border mt-2 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
            defaultValue={emailFromState} // prefill from previous step
            {...register("email", { required: true })}
          />
          <input
            type="text"
            placeholder="Enter OTP"
            className="border mt-3 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
            {...register("otp", { required: true })}
          />
          <input
            type="password"
            placeholder="Enter New Password"
            className="border mt-3 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
            {...register("newPassword", { required: true })}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="border mt-3 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
            {...register("confirmPassword", { required: true })}
          />

          <button
            type="submit"
            className="border mt-3 bg-yellow-400 h-[2.5rem] w-full text-black text-sm font-semibold hover:text-yellow-400 hover:bg-black"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
