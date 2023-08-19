
function Search(){
    return(
        <div className='relative w-1/2'>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fas fa-search text-zinc-300"></i>
            </div>
            <input 
                type="text"
                placeholder="Search"
                className='w-full h-10 pl-8 p-2 bg-zinc-800 text-zinc-300 font-normal border rounded-full shadow-sm outline-none hover:shadow-lg'
                required
            />
        </div>
    )
}

export default Search