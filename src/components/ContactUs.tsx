function ContactUs(){
    return(

        <> 
        <div className=" flex flex-row ">
            <div className="flex flex-col">
                <h1  className="text-lg font-semibold">Send Us Message</h1>
                <p className="text-sm">Contact us to get any support or help.</p>
            </div>    

           
            <form action="" className="flex flex-col pt-2" >
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


            <div className="w-[30rem]">
                <h1  className="text-lg font-semibold">Get In Touch</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium nisi feugiat nisi gravida, eget rutrum ligula placerat. Aenean id elit dolor. Suspendisse malesuada varius odio.
Praesent efficitur, odio at dictum fringilla, leo dolor ornare nulla, quis condimentum enim arcu id magna. Phasellus congue hendrerit dolor id commodo. Suspendisse potenti.</p>


            </div>
        </div>
        </>
    )
}
export default ContactUs;