
"use client";
import { useState } from 'react';
import { useSession } from "next-auth/react"
import Link from "next/link";
import Image from 'next/image';
import logo from '../../public/paintbrush.svg';
import Search from "./Search";
import Dropdown from "./Dropdown";
import Login from "./Login";
import Register from "./Register";


function Navegation(){
    
    const explore: string[] = ['Artwork', 'Blogs', 'About'];
    const learn: string[] = ['Courses', 'Tutorials', 'Guides'];
    const store: string[] = ['Marketplace'];
    const jobs: string[] = ['Find Job', 'Post Job'];
    const profile: string[] = ['Profile', 'My Library', 'Sign Out'];
    
    const [check, setCheck] = useState(false);
    const { data: session, status} = useSession();
    console.log(session,status);

    return(
        <div className="relative" >
            <input className="hidden" type="checkbox" id="check" onClick={(e) => setCheck(!check)} />
            <label htmlFor="check" className="fixed top-8 left-2 flex text-blue-600 text-3xl z-[60] cursor-pointer md:hidden ">
                <i className='fas fa-bars' />
            </label>

            <div className={`${ check ? "flex" : "hidden md:flex" }`} >

                <nav className={`bg-zinc-900 text-white h-20 px-6 flex flex-col h-screen w-3/4 md:w-full md:h-20 md:flex-row justify-center gap-24 md:gap-4 md:justify-between items-center fixed z-50`} >
                    <div className={`flex flex-col gap-4 md:flex-row`}>
                        <Link 
                            className="hidden md:flex w-12" 
                            href="/"
                        >
                            <Image
                                priority
                                className="w-full"
                                src={logo}
                                alt="logo"
                            />
                        </Link>

                        <div className="flex justify-around items-center h-20 w-full" >
                            <ul className="flex flex-col md:flex-row justify-between items-center gap-6 text-center font-bold" >
                                <Dropdown title="Explore" icon={<i className="fas fa-compass" />} subtitles={explore} />
                                <Dropdown title="Learn" icon={<i className="fas fa-book" />} subtitles={learn} />
                                <Dropdown title="Jobs" icon={<i className="fas fa-briefcase"></i>} subtitles={jobs} />
                                <Dropdown title="Store" icon={<i className="fas fa-store-alt"></i>} subtitles={store} />
                            </ul>
                        </div> 

                    </div>

                    <Search />

                    {
                        session ? (
                            <div className="flex items-center text-sm gap-4">
                                <i className="fas fa-shopping-cart text-zinc-200 hover:text-blue-600 text-2xl cursor-pointer"></i>

                                <Dropdown title="" icon={<i className="fas fa-user-circle text-zinc-200 hover:text-blue-600 text-4xl mx-8 cursor-pointer"></i>} subtitles={profile} />

                            </div>
                        ) : (
                            <div className="flex items-center text-sm gap-4">
                                <a 
                                    className="w-24 h-10 flex justify-center items-center gap-2 bg-blue-600 font-bold p-1 hover:bg-blue-700 transition duration-500 ease-in-out rounded" 
                                    href="#loginModal"
                                >
                                    <i className="fas fa-sign-in-alt"></i>
                                    Sign In
                                </a>
                                <a 
                                    className="w-24 h-10 flex justify-center items-center gap-2 bg-blue-600 font-bold p-1 hover:bg-blue-700 transition duration-500 ease-in-out rounded" 
                                    href="#registerModal">
                                        <i className="fas fa-user-edit"></i>
                                        Sign Up
                                    </a>
                            </div>
                        )
                    }

                    <Login />
                    <Register />

                </nav>

            </div>

        </div>
    )
}

export default Navegation;