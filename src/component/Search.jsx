import React, { useRef } from 'react'

function Search({ setFoodDatas, setIsLoading, url, api }) {

    const searchRef = useRef();

    const searchHandler = (e)=>{
        e.preventDefault();
        setIsLoading(true);
        // console.log(searchRef.current.value);
        fetchFood();
    }

    async function fetchFood(){
        const response = await fetch(`${url}?query=${searchRef.current.value}&apiKey=${api}`);
        const result = await response.json();
        // console.log(result);
        setFoodDatas(result.results);
        setIsLoading(false);
    }

    return (
        <form action="" method="" className="flex justify-center items-center gap-2 pt-5">
            <div className='w-full md:w-96'>
                <input type="text" className="w-full border rounded-lg focus:outline-none focus:border-slate-500 p-2 px-3" ref={searchRef} placeholder="Food name" />
            </div>
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-lg px-4 py-2" onClick={searchHandler}>Search</button>
        </form>
    )
}

export default Search