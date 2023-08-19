
'use client'
import { ReactNode, useState } from "react";
import { signOut } from "next-auth/react"

function Dropdown({ title, icon, subtitles }: { title: string, icon: ReactNode, subtitles: string[] }) {

  const [open, setOpen] = useState(false);

  const btnEvent = (target:string) =>{
    target === 'Sign Out' ? signOut() : null;
  }
  
  return (
    <div className="flex">

        <div 
            className="relative text-zinc-400 bg-transparent space-x-2 font-medium flex justify-center items-center cursor-pointer hover:text-white border-b-2 border-transparent hover:border-blue-600 transition duration-300 ease-in-out" 
            onMouseEnter={() => setOpen(true)} 
            onMouseLeave={() => setOpen(false)} 
        >

            <div className="flex items-center gap-1 pr-4 md:pr-0 " >
                {icon}
                <div >{title}</div>
            </div>

            {subtitles ? (
                <div 
                    style={open ? {display: 'block'} : {display: 'none'}} 
                    className={
                        title ? `w-24 z-1 absolute left-[68px] top-1 md:top-7 md:-left-6 bg-zinc-800 divide-y divide-gray-100 rounded-lg shadow-lg` :
                        `w-24 z-1 absolute left-[68px] top-1 md:top-10 md:-left-2 bg-zinc-800 divide-y divide-gray-100 rounded-lg shadow-lg`}
                >
                    <ul className="m-0 p-0 text-sm text-center list-none text-gray-700">

                        {subtitles.map((subtitle, index) => {
                            return(
                                <span 
                                    key={index} 
                                    onClick={() => btnEvent(subtitle)}
                                    className="flex justify-center items-center space-x-2 p-2 text-zinc-200 no-underline rounded-sm hover:bg-blue-600 hover:text-gray-100" >
                                    {subtitle}
                                </span>
                            )
                        })}
                    </ul>
                </div>

                ) 
                    : 
                (null)
            }
            

      </div>

    </div>
  );
}

export default Dropdown;