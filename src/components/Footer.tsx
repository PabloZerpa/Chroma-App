
'use client'
import Image from 'next/image';
import logo from '../../public/paintbrush.svg';

const Footer = () => {

  return (
    <footer className='flex flex-col flex-wrap justify-center items-center py-4'>

        <div className='w-full flex justify-center'>
                <div className='flex flex-col items-start text-left mt-4 w-36 md:w-48'>
                    <h2 className='mb-4 text-xl text-zinc-200 font-bold'>About Us</h2>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/sign-up'>How it works</a>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Testimonials</a>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Careers</a>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Terms of Service</a>
                </div>
                <div className='flex flex-col items-start text-left mt-4 w-36 md:w-48'>
                    <h2 className='mb-4 text-xl text-zinc-200 font-bold'>Contact Us</h2>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Contact</a>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Support</a>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Sponsorships</a>
                </div>
                <div className='flex flex-col items-start text-left mt-4 w-36 md:w-48'>
                    <h2 className='mb-4 text-xl text-zinc-200 font-bold'>Social Media</h2>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Instagram</a>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Facebook</a>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Youtube</a>
                    <a className='text-sm text-zinc-200 decoration-none mb-2 hover:text-blue-600 transition duration-300' href='/'>Twitter</a>
                </div>
        </div>

        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24 mt-8'>
        
            <div className='text-3xl text-blue-600 font-bold flex justify-start items-center gap-2 ml-6 mb-4 cursor-pointer decoration-none'>
                Chroma
                <Image
                    priority
                    className="w-8"
                    src={logo}
                    alt="logo"
                />
            </div>

            <span className='text-zinc-200 mb-4'>Chroma © 2020</span>

            <div className='flex justify-between items-center mb-4 w-60 text-xl text-zinc-200'>
                <a className='w-full hover:text-blue-600 transition duration-300' target='_blank' aria-label='Facebook'> 
                    <i className='fab fa-facebook-f' />
                </a>
                <a  className='w-full hover:text-blue-600 transition duration-300' target='_blank' aria-label='Instagram'>
                    <i className='fab fa-instagram' />
                </a>
                <a className='w-full hover:text-blue-600 transition duration-300' target='_blank' aria-label='Youtube'>
                    <i className='fab fa-youtube' />
                </a>
                <a className='w-full hover:text-blue-600 transition duration-300' target='_blank' aria-label='Twitter'>
                    <i className='fab fa-twitter' />
                </a>
                <a className='w-full hover:text-blue-600 transition duration-300' target='_blank' aria-label='LinkedIn'>
                    <i className='fab fa-linkedin' />
                </a>
                
            </div>
        </div>
    </footer>
  );
}

export default Footer;