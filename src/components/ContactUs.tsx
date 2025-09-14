import {  Phone,  } from "lucide-react";



function ContactUs(){
    return(

        <div className=" pl-10 block w-full justify-center  md:flex flex-row mt-4 mb-5">
               <form action="" className="flex flex-col pt-2" >
                 <h1  className="text-lg font-semibold">Send Us Message</h1>
                <p className="text-sm">Contact us to get any support or help.</p>

                <label htmlFor="name" className="text-sm font-semibold pt-2"> Your Name (required)</label>
                <input type="text" name="name" id=""  className="h-8 w-[20rem] border border-gray-300 mt-2"/>
                <label htmlFor="email" className="text-sm font-semibold mt-2"> Your Email (required)</label>
                <input type="text" name="email" id=""  className="h-8 w-[20rem] border border-gray-300 mt-2" />
                <label htmlFor="Subject" className="text-sm font-semibold mt-2">Subject</label>
                <input type="text" name="name" id=""  className="h-8 w-[20rem] border border-gray-300 mt-2" />
                <label htmlFor="name" className="text-sm font-semibold mt-2"> Your Message</label>
                <textarea name="message" id="" className="h-32 w-[20rem] border border-gray-300 mt-2"></textarea>
                <input type="submit"  className="bg-blue-500 w-[12rem] h-10 text-white mt-2 mb-4" />
               

            </form>


            <div className=" pl-4 w-full md:w-[30rem]">
            <div className=" pl-6 w-full md:w-[30rem]">
                <h1  className="text-lg font-bold">Get In Touch</h1>
                <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium nisi feugiat nisi gravida, eget rutrum ligula placerat. Aenean id elit dolor. Suspendisse malesuada varius odio.
Praesent efficitur, odio at dictum fringilla, leo dolor ornare nulla, quis condimentum enim arcu id magna. Phasellus congue hendrerit dolor id commodo. Suspendisse potenti.</p>

                      <div className="border border-grey-100 w-[30rem]"></div>
                      <h1  className="text-lg font-semibold">Our Office</h1>

                      
                        <div className="flex flex-row"> 

                        <div className="bg-blue-600 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                        <Phone color="white" size={20} />
                        </div>
                        <p className="pl-3">Phone: (012) 345 9870</p>

                        </div>

                    

                        
                    

            </div>
        </div>
       </div>
    )
}
export default ContactUs;