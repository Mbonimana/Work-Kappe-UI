import { Layout } from "lucide-react";
import { Links } from "react-router-dom";


function Login() {
    return(
        <>
        
        <div className=" flex justify-center items-center pt-5">
            <div className="h-[14rem] w-[19rem] bg-yellow-400 text-black p-6 ">
                <h1 className="text-[1.6rem] font-semibold">Login</h1>
                <p className="text-sm">Get Acces to your Orders,</p>
                <p className="text-sm">Wishlist and Recommendations ,</p>
                
            </div>

            <div className="h-[14rem] w-[21rem] bg-white-blue-500 text-white p-2 border border-gray-200 shadow-sm ">
                <form action="Login">
                    <div className="p-4 flex flex-col  ">
                    <input type="text"placeholder="Enter Username/ Email Address"   className="border mt-2 border-gray-300 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold"/>
                    <input type="password"placeholder="Enter Password"  className="border mt-3 border-gray-300 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold "/>
                    <div className="flex flex-row justify-between text-sm font-bold  mt-3">
                        <div className="text-blue-500 flex">
                        <input type="checkbox" name="" id="" />
                         <p className="text-yellow-400">Remember Me</p>

                        </div>
                        <p className="text-yellow-400">Lost Password?</p>
                         

                    </div>

                    <input type="Submit" className=" border mt-2  bg-yellow-400 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold hover:text-yellow-400 hover:bg-black "/>

                   
                    
                    </div>
                </form>

                

            </div>
        </div>

        </>
    )
}

export default Login;