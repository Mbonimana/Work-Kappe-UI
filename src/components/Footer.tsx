
import {  Clock, Mail, Phone, Home } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-100 px-6 md:pl-8 pt-8 pb-8 space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Brand & Contact */}
        <div className="flex flex-col space-y-4 text-center md:text-left md:pl-8">
          <h1 className="text-[2rem] font-bold">Kappee</h1>
          <p className="text-[0.8rem]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>

          <div className="flex items-center justify-center md:justify-start">
            <Home size={20} color="gray" />
            <p className="text-[0.8rem] text-gray-900 pl-2">Kigali-Rwanda, Kn 20 Ave</p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Phone size={20} color="gray" />
            <p className="text-[0.8rem] text-gray-900 pl-2">576-245-2478</p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Mail size={20} color="gray" />
            <p className="text-[0.8rem] text-gray-900 pl-2">info@kapee.com</p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Clock size={20} color="gray" />
            <p className="text-[0.8rem] text-gray-900 pl-2">
              Mon - Fri / 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Information */}
        <div className="flex flex-col space-y-4 text-center md:text-left md:pl-8">
          <h2 className="text-md font-semibold text-black">INFORMATION</h2>
          <div className="text-[0.8rem] text-gray-900 space-y-2">
            <p>About Us</p>
            <p>Store Location</p>
            <p>Contact Us</p>
            <p>Shipping & Delivery</p>
            <p>Latest News</p>
            <p>Our Sitemap</p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col space-y-4 text-center md:text-left md:pl-20">
          <h2 className="text-md font-semibold text-black">OUR SERVICES</h2>
          <div className="text-[0.8rem] text-gray-900 space-y-2">
            <p>Privacy Policy</p>
            <p>Terms of Sale</p>
            <p>Customer Service</p>
            <p>Delivery Information</p>
            <p>Payments</p>
            <p>Saved Cards</p>
          </div>
        </div>

        {/* My Account */}
        <div className="flex flex-col space-y-4 text-center md:text-left md:pl-20">
          <h2 className="text-md font-semibold text-black">MY ACCOUNT</h2>
          <div className="text-[0.8rem] text-gray-900 space-y-2">
            <p>My Account</p>
            <p>My Shop</p>
            <p>My Cart</p>
            <p>Checkout</p>
            <p>My Wishlist</p>
            <p>Tracking Order</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-4 text-center md:text-left md:pl-20">
          <h2 className="text-md font-semibold text-black">NEWSLETTER</h2>
          <div className="text-[0.8rem] space-y-4">
            <p>Subscribe to our mailing list to get the new updates!</p>
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch text-black bg-white">
              <Mail size={20} color="gray" className="mt-3 sm:mt-0 ml-3" />
              <input
                type="text"
                placeholder="Your Email Address"
                className="w-full sm:w-38 placeholder-black ml-2 py-2"
              />
              <button className="h-11 text-md text-yellow-500 bg-black w-full sm:w-28 font-bold">
                SIGN UP
              </button>
            </div>
            <div className="ICONS flex justify-center md:justify-start flex-wrap gap-3">
              <img src="https://www.freeiconspng.com/uploads/facebook-logo-3.png" alt="Facebook" className="w-8 h-8" />
              <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" alt="Twitter" className="w-8 h-8" />
              <img src="https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png" alt="LinkedIn" className="w-8 h-8" />
              <img src="https://www.freepnglogos.com/uploads/new-instagram-logo-png-1.png" alt="Instagram" className="w-8 h-8" />
              <img src="https://cdn.pixabay.com/photo/2012/04/15/22/00/rss-35468_640.png" alt="RSS" className="w-8 h-8" />
              <img src="https://www.freepnglogos.com/uploads/youtube-play-button-png/youtube-play-button-icon-icons-and-png-backgrounds-25.png" alt="YouTube" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
