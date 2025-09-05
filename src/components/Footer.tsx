import React from "react";
import { Search, Clock, Mail, Phone, Home } from "lucide-react";
function Footer(){
    return (
        <>
        <div className=" flex flex-row bg-gray-100 pl-8 pt-8 pb-8">
            <div className="flex flex-col pl-8 space-y-4 ">
                <h1 className="text-[2rem] font-bold">Kappee</h1> 
                <p className=" space-y-4 text-[0.8rem]"  >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <div className=" flex flex-row ">
                            <Home size={20} color="gray" /> 
                            <p className="text-[0.8rem] text-gray-900 pl-2 ">Kigali-Rwanda, Kn 20 Ave </p>
                </div>  
                <div className=" flex flex-row ">
                    <Phone size={20} color="gray" /> 
                    <p className="text-[0.8rem] text-gray-900 pl-2 ">576-245-2478 </p>
                </div>  
                <div className=" flex flex-row ">
                    <Mail size={20} color="gray" /> 
                    <p className="text-[0.8rem] text-gray-900 pl-2">info@kapee.com </p>
                </div>  
                <div className=" flex flex-row ">
                    <Clock size={20} color="gray" /> 
                    <p className="text-[0.8rem] text-gray-900 pl-2 ">Mon - Fri / 9:00 AM - 6:00 PM </p>
                </div>  
                
           
            </div>

            <div className="flex flex-col pl-8 space-y-4 ">
                <h2 className="text-md font-semibold text-black space-y-4"> INFORMATION</h2>
                    <div className="text-[0.8rem] text-gray-900 space-y-4">
                       <p>About Us</p>
                       <p>Store Location</p>
                       <p>Contact Us</p>
                       <p>Shipping & Delivery</p>
                       <p>Latest News</p>
                       <p>Our Sitemap</p>
                    </div>   
            </div>

            <div className="flex flex-col pl-20 space-y-4 ">
                <h2 className="text-md font-semibold text-black "> OUR SERVICES</h2>
                    <div className="text-[0.8rem] text-gray-900 space-y-4">
                       <p>Privacy Policy</p>
                       <p>Terms of Sale</p>
                       <p>Customer Service</p>
                       <p>Delivery Information</p>
                       <p>Payments</p>
                       <p>Saved Cards</p>
                    </div>  
                         
            </div>
           <div className="flex flex-col pl-20 space-y-4">
                <h2 className="text-md font-semibold text-black  "> MY ACCOUNT</h2>
                    <div className="text-[0.8rem] text-gray-900 space-y-4">
                       <p>My Account</p>
                       <p>My Shop</p>
                       <p>My Cart</p>
                       <p>Checkout</p>
                       <p>My Wishlist</p>
                       <p>Tracking Order</p>
                    </div>  
                         
            </div>

             <div className="flex flex-col pl-20 space-y-4">
                <h2 className="text-md font-semibold text-black  "> NEWS LETTER</h2>
                    <div className="text-[0.8rem] space-y-4 ">
                       <p>Subscribe to our mailing list to get the new updates!</p>
                       <div className="flex flex-row  text-black bg-white">
                        
                        <Mail size={20} color="gray" className="mt-3 ml-3" /> 
                        <input type="text" placeholder="Your Email Address " className=" w-38 placeholder-black ml-2"/>
                        <button className="  h-11 text-md text-yellow-500 bg-black w-28 font-bold" >SIGN UP</button>
                        </div>
                        <div className="ICONS flex flex-row">
                            <img src="https://www.freeiconspng.com/uploads/facebook-logo-3.png" alt="Icon 1" className="w-8 h-8 mr-3" />
                            <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" alt="Icon 2" className="w-8 h-8  mr-3" />
                            <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png" alt="Icon 3" className="w-8 h-8  mr-3" /> 
                            <img src="https://www.freepnglogos.com/uploads/new-instagram-logo-png-1.png" alt="Icon 3" className="w-8 h-8  mr-3" /> 
                            <img src=" https://cdn.pixabay.com/photo/2012/04/15/22/00/rss-35468_640.png " alt="Icon 3" className="w-8 h-8  mr-3" /> 
                            <img src="https://www.freepnglogos.com/uploads/youtube-play-button-png/youtube-play-button-icon-icons-and-png-backgrounds-25.png" alt="Icon 3" className="w-8 h-8  mr-3" />
                           
                        </div>
                    </div>  
                         
            </div>
            
        
         
        </div>


        </>
)
}
import { ImportIcon } from "lucide-react";
    
        
export default Footer;
