import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
}

const ForgotPassword = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const navigate = useNavigate();

  const onSendOTP = async (data: FormData) => {
    try {
      const res = await axios.post(
        `https://kappebackend.onrender.com/api/user/send-otp`, // backend endpoint
        { email: data.email }
      );

      Notify.success(res.data.message || "OTP Sent Successfully");

      // Pass email to next step (verify OTP form)
      navigate("/verify-otp", { state: { email: data.email } });

      reset();
    } catch (error: any) {
      console.error("Error sending OTP", error);
      Notify.failure(
        error.response?.data?.message || "Failed to send OTP. Try again."
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-[10%] px-4">
      <div className="w-full max-w-sm bg-white p-6 border border-gray-200 shadow-md rounded-md">
        <h1 className="text-lg font-semibold text-center text-yellow-500">
          Forgot Password
        </h1>
        <p className="text-sm text-center mb-4">
          Enter your email and we will send you an OTP to reset your password.
        </p>

        <form onSubmit={handleSubmit(onSendOTP)} className="w-full">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="border mt-2 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
            {...register("email", { required: true })}
          />

          <button
            type="submit"
            className="border mt-4 bg-yellow-400 h-[2.5rem] w-full text-black text-sm font-semibold hover:text-yellow-400 hover:bg-black"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
