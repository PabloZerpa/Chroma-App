
"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Login(){

    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const password = formData.get('password');

        const res = await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: false,
        });

        if (res?.error) {
            toast('SigIn Error', { hideProgressBar: false, autoClose: 1000, type: 'error', position: 'top-center', theme: 'colored' });
        };

        if(password !== null){
            if(password.length > 5){
                if (res?.ok){
                    toast('SigIn Succes', { hideProgressBar: false, autoClose: 1000, type: 'success', position: 'top-center', theme: 'colored' });
                    router.push("/#");
                    setTimeout(() => { window.location.reload() }, 1500);
                }
            }
            else{
                toast('Password to short', { hideProgressBar: false, autoClose: 1000, type: 'error', position: 'top-center', theme: 'colored' });
            }
        }
    
    
    };

    return(
        
        <div id="loginModal" className='fixed top-0 left-0 right-0 botttom-0 bg-black z-50 opacity-0 
            pointer-events-none transition duration-300 ease-in-out target:opacity-100 target:pointer-events-auto'>

            <ToastContainer />

            <div className='relative transition duration-300 ease-in-out'>
                <div className='bg-black/75 fixed top-0 right-0 left-0 bottom-0'>
                    <div className='flex justify-center items-center relative w-[400px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg border-solid border-blue-500 border-2'>
                        
                        <a className='absolute flex items-center justify-center w-8 h-8 text-white font-bold bg-red-600 rounded-full top-0 right-0' href="#">X</a>
                        
                        <form className="flex flex-col gap-4 justify-center items-center" onSubmit={handleSubmit}>

                            <div className="flex gap-1">
                                <i className="fas fa-at text-white text-lg pt-2 mt-1.5"></i>
                                <input 
                                    className='outline-none text-white font-bold p-2 bg-transparent border-b-2 border-blue-500 border-solid' 
                                    type="email"  placeholder="Email" name="email" />
                            </div>

                            <div className="flex gap-1">
                                <i className="fas fa-key text-white text-lg pt-2 mt-1.5"></i>
                                <input 
                                    className='outline-none text-white font-bold p-2 bg-transparent border-b-2 border-blue-500 border-solid' 
                                    type="password"  placeholder="Password" name="password" />
                            </div>

                            <a className="text-white text-base hover:underline" href="#">Forgot password?</a>

                            <button className="w-36 h-10 bg-zinc-200 hover:bg-white text-black font-bold cursor-pointer rounded">
                                Sign In
                            </button>

                            <span className="text-white text-sm hover:underline">OR</span>

                            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                                <button className="w-36 h-10 bg-zinc-200 hover:bg-white text-red-700 font-bold cursor-pointer rounded">
                                    Google
                                </button>

                                <button className="w-36 h-10 bg-zinc-200 hover:bg-white text-blue-500 font-bold cursor-pointer rounded">
                                    Facebook
                                </button>

                                <button className="w-36 h-10 bg-zinc-200 hover:bg-white text-blue-700 font-bold cursor-pointer rounded">
                                    Linkedin
                                </button>

                                <button className="w-36 h-10 bg-zinc-200 hover:bg-white text-blue-400 font-bold cursor-pointer rounded">
                                    Twitter
                                </button>
                            </div>

                            <a className="text-white text-base hover:underline" href="#registerModal">{`Don't have an account?`} <span className="font-bold">Sign Up</span></a>

                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login