import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import Search from './Search';
import Content from './Content';

const URL = `https://api.spoonacular.com/recipes/complexSearch`;
const API_KEY = import.meta.env.VITE_API_KEY;

function Container() {
    const [foodDatas,setFoodDatas] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isRecipeLoad,setIsRecipeLoad] = useState(true);

    async function fetchFood(){
        const response = await fetch(`${URL}?apiKey=${API_KEY}`);
        const result = await response.json();
        // console.log(result);
        setFoodDatas(result.results);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchFood();
    },[])

    return (
        <div className='w-full h-screen flex flex-col p-3'>
            <Banner />
            <div className='grow flex flex-col overflow-y-auto'>
                <Search setFoodDatas={setFoodDatas} setIsLoading={setIsLoading} url={URL} api={API_KEY} />
                <Content foodDatas={foodDatas} isLoading={isLoading} isRecipeLoad={isRecipeLoad} setIsRecipeLoad={setIsRecipeLoad} api={API_KEY} />
            </div>
        </div>
    )
}

export default Container