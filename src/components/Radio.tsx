
function Radio({label, name, opciones, size='small'} : {label:string, name:string, opciones:string[], size:string}) {

    const largo = opciones.length;
    const small = `flex items-center justify-center w-32 h-10 p-2 outline-none text-zinc-900 bg-zinc-200 border border-gray-100 cursor-pointer peer-checked:border-blue-600 peer-checked:text-zinc-200 peer-checked:bg-blue-600 hover:bg-gray-100`;
    const smallLeft = `flex items-center justify-center w-32 h-10 p-2 outline-none text-zinc-900 bg-zinc-200 border border-gray-100 rounded-l-full cursor-pointer peer-checked:border-blue-600 peer-checked:text-zinc-200 peer-checked:bg-blue-600 hover:bg-gray-100`;
    const smallRight = `flex items-center justify-center w-32 h-10 p-2 outline-none text-zinc-900 bg-zinc-200 border border-gray-100 rounded-r-full cursor-pointer peer-checked:border-blue-600 peer-checked:text-zinc-200 peer-checked:bg-blue-600 hover:bg-gray-100`;
    const big = `flex items-center justify-center w-28 h-10 p-2 outline-none text-zinc-900 bg-zinc-200 border border-gray-100 cursor-pointer peer-checked:border-blue-600 peer-checked:text-zinc-200 peer-checked:bg-blue-600 hover:bg-gray-100`;
    const bigLeft = `flex items-center justify-center w-28 h-10 p-2 outline-none text-zinc-900 bg-zinc-200 border border-gray-100 rounded-l cursor-pointer peer-checked:border-blue-600 peer-checked:text-zinc-200 peer-checked:bg-blue-600 hover:bg-gray-100`;
    const bigRight = `flex items-center justify-center w-28 h-10 p-2 outline-none text-zinc-900 bg-zinc-200 border border-gray-100 rounded-r cursor-pointer peer-checked:border-blue-600 peer-checked:text-zinc-200 peer-checked:bg-blue-600 hover:bg-gray-100`;
    

    return(
        <div className="flex flex-col items-center justify-center text-sm font-medium">

            <ul className="flex text-sm m-0 p-2 mr-1">

                {opciones.map((opcion, index) => {
                    const labelId = `${label}${index}`;
                    if(index===0){
                        return(
                            <li key={index}>
                                <input 
                                    type="radio" 
                                    id={labelId}
                                    name={name}
                                    value={opcion}
                                    className="hidden peer" 
                                    defaultChecked
                                />
                                <label htmlFor={labelId} className={size==='small' ? smallLeft : bigLeft} >                           
                                    <div className="text-md font-semibold">{opcion}</div>
                                    <i className="fas fa-sync-alt ml-2"></i>
                                </label>
                            </li>
                        )
                    }
                    else if(index===(largo-1)){
                        return(
                            <li key={index}>
                                <input 
                                    type="radio" 
                                    id={labelId}
                                    name={name}
                                    value={opcion}
                                    className="hidden peer" 
                                />
                                <label htmlFor={labelId} className={size==='small' ? smallRight : bigRight} >                           
                                    <div className="text-md font-semibold">{opcion}</div>
                                    <i className="fas fa-clock ml-2"></i>
                                </label>
                            </li>
                        )
                    }
                    else{
                        return(
                            <li key={index}>
                                <input 
                                    type="radio" 
                                    id={labelId}
                                    name={name}
                                    value={opcion}
                                    className="hidden peer" 
                                />
                                <label htmlFor={labelId} className={size==='small' ? small : big} >                           
                                    <div className="text-md font-semibold">{opcion}</div>
                                    <i className="fas fa-fire ml-2"></i>
                                </label>
                            </li>
                        )
                    }
                    
                })}
            </ul>
        </div>
    );
}

export default Radio;