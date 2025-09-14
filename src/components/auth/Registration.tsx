




function Registration() {
 
    


    return(
        <>
        
        <div className=" flex justify-center items-center pt-[15%]">
            <div className="h-[15rem] w-[19rem] bg-yellow-400 text-black p-6 ">
                <h1 className="text-[1.6rem] font-semibold">Register Your Account</h1>
               
                
            </div>

            <div className="h-[15rem] w-[21rem] bg-white-blue-500 text-white p-2 border border-gray-200 shadow-sm ">
                <form action="Login">
                    <div className="p-4 flex flex-col  ">
                        <input type="password"placeholder="Enter Names"  className="border mt-3 border-gray-300 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold "/>
                    <input type="text"placeholder="Enter Username/ Email Address"   className="border mt-2 border-gray-300 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold"/>
                    
                    <input type="password"placeholder="Enter Password"  className="border mt-3 border-gray-300 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold "/>

                    <input type="Submit" className=" border mt-2  bg-yellow-400 h-[2.5rem] w-[17rem] text-black  text-sm font-semibold hover:text-yellow-400 hover:bg-black "/>

                   
                    
                    </div>
                </form>

                

            </div>
        </div>

        </>
    )
}

export default Registration;
