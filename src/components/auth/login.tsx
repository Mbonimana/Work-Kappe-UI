
import { Link } from "react-router-dom";



function Login() {

    
    return(
        <>
        
        <div className=" flex justify-center items-center pt-[15%]">
            <div className="h-[15rem] w-[19rem] bg-yellow-400 text-black p-6 ">
                <h1 className="text-[1.6rem] font-semibold">Login</h1>
                <p className="text-sm">Get Acces to your Orders,</p>
                <p className="text-sm">Wishlist and Recommendations ,</p>
                
            </div>

            <div className="h-[15rem] w-[21rem] bg-white-blue-500 text-white p-2 border border-gray-200 shadow-sm ">
                <form action="Login">
                    <div className="p-4 flex flex-col  ">
                    <input type="text"placeholder="Enter Username/ Email Address"   className="border mt-2 border-gray-300 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold"/>
                    <input type="password"placeholder="Enter Password"  className="border mt-3 border-gray-300 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold "/>
                    <div className="flex flex-row justify-between text-sm font-bold  mt-3">
                        <div className="text-blue-500 flex">
                        <input type="checkbox" name="" id="" />
                         <a href="#" className="text-yellow-400">Remember Me</a>

                        </div>
                        <a href="#" className="text-yellow-400">Lost Password?</a>
                         

                    </div>

                    <input type="Submit" className=" border mt-2  bg-yellow-400 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold hover:text-yellow-400 hover:bg-black "/>
                    
                    <Link to ="../Registration" className="text-yello">
                    <span  className="text-yellow-500 text-sm  justfy justify-between " >Don't have account? Sign Up</span>
                   </Link>
                    
                    </div>
                  <Link to ="/dashboard" className="text-yellow-400">
                    <span  className="text-yellow-500 text-sm  justify-between " >Go to dashboard</span>
                   </Link>
                </form>

               

            </div>
        </div>

        </>
    )
}

export default Login;