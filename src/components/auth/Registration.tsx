
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm} from 'react-hook-form';
import { Notify } from 'notiflix';

interface FormData {
    fullnames: string;
    email: string;
    password: string;
    phone: string;
}



const Registration = () => {
      const navigate = useNavigate();
    const { register, handleSubmit,reset } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        try {
            const { fullnames, email, password, phone } = data;
            const formaData = new FormData();
            formaData.append('fullnames', fullnames);
            formaData.append('email', email);
            formaData.append('password', password);
            formaData.append('phone', phone);

            await axios.post(`https://kappebackend.onrender.com/api/user/userRegistration`, formaData,
                { headers: { 'Content-Type': 'application/json' } }  
            );

            Notify.success('Registration Successful');
            reset();
            navigate('/login');


        } catch (err) {
            console.log(err);
            Notify.failure('Registration Failed');

        }


    }



    return(
        <>
        
        <div className="flex flex-col md:flex-row justify-center items-center pt-[10%] px-4 md:space-y-0">
  {/* Left Panel */}
  <div className="w-full max-w-sm bg-yellow-400 text-black p-6 rounded-md flex flex-col justify-center md:min-h-[18rem]">
    <h1 className="text-[1.6rem] font-semibold">Register Your Account</h1>
  </div>

  {/* Right Panel */}
  <div className="w-full max-w-sm bg-white-blue-500 text-white p-4 border border-gray-200 shadow-sm rounded-md md:min-h-[18rem] flex items-center md:-ml-[1px]">
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Enter Full Names"
          className="border mt-3 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
          {...register("fullnames")}
        />
        <input
          type="text"
          placeholder="Enter your Email Address"
          className="border mt-2 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
          {...register("email")}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="border mt-3 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
          {...register("password")}
        />
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="border mt-3 border-gray-300 h-[2.5rem] w-full text-black text-sm font-semibold px-2"
          {...register("phone")}
        />
        <button
          type="submit"
          className="border mt-2 bg-yellow-400 h-[2.5rem] w-full text-black text-sm font-semibold hover:text-yellow-400 hover:bg-black"
        >
          Register
        </button>

      </div>
    </form>
    
  </div>
 
</div>

        </>
    )
}

export default Registration;
