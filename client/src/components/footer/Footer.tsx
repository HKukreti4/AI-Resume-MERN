import { ArrowBigLeft, ArrowBigRight, ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "../logo/Logo";

const Footer = () => {
    return (
        <div className=' pt-8 mx-auto max-w-4/5   text-white'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    
                    <Logo/>
                    <p className='text-sm mt-1'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <div className='flex items-center gap-3 mt-4 text-white'>
                        {/* Instagram */}
                        <Instagram/>
                        {/* Facebook */}
                       <Facebook />
                        {/* Twitter */}
                        <Twitter/>
                        {/* LinkedIn */}
                      <Linkedin/>
                    </div>
                </div>

                <div>
                    <p className='text-lg text-gray-200'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm text-gray-400'>
                        <li><a href="#" className="hover:text-blue-400">About</a></li>
                        <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400">Press</a></li>
                        <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-400">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-gray-200'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm text-gray-400'>
                        <li><a href="#" className="hover:text-blue-400" >Help Center</a></li>
                        <li><a href="#" className="hover:text-blue-400">Safety Information</a></li>
                        <li><a href="#" className="hover:text-blue-400">Cancellation Options</a></li>
                        <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                        <li><a href="#" className="hover:text-blue-400">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-lg text-gray-200'>STAY UPDATED</p>
                    <p className='mt-3 text-sm text-gray-400'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex  items-stretch  mt-4  overflow-hidden'>
                        <input type="email" className='w-full rounded-l border border-gray-300 py-1 px-3 outline-none' placeholder='Your email' />
                        <button className='flex  items-center justify-center bg-red-400 cursor-pointer  aspect-square rounded-r'>
                          <ArrowRight/>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p className="text-sm">© {new Date().getFullYear()} <a href="https://prebuiltui.com">ResumeX</a>. All rights reserved.</p>
                <ul className='flex items-center text-sm gap-4 text-start'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;