import { Layout } from "lucide-react";
import { Links } from "react-router-dom";


function MyAccount() {
    return(
        <>
        <div className="h-44 w-full bg-gray-200 pb-4 ">
            <h1 className="justify-center items-center flex text-[3rem] font-semibold"  >My Account</h1> <br/>
            <ul className="flex flex-row justify-center items-center ">
                <li>Home/</li>
                <li>Shop/</li>
                <li>MyAccount</li>

            </ul>
        </div>
        <div className=" flex justify-center items-center pt-5">
            <div className="h-[14rem] w-[19rem] bg-blue-500 text-white p-6 ">
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
                         <p>Remember Me</p>

                        </div>
                        <p className="text-blue-500">Lost Password?</p>
                         

                    </div>

                    <input type="Submit" className=" mt-2 border bg-blue-600 h-[2.5rem] w-[17rem] text-white  text-sm font-semibold "/>

                   
                    
                    </div>
                </form>

                

            </div>
        </div>

        </>
    )
}

export default MyAccount;