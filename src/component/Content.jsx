import React, { useEffect, useState } from 'react'
import Food from './Food'
import Recipe from './Recipe'
import "./Content.css"

function Content({ foodDatas, isLoading, isRecipeLoad, setIsRecipeLoad, api }) {

    const [isShow,setIsShow] = useState(false); // use for recipe where screen medium
    const [foodId,setFoodId] = useState("");

    const [recipeInfo,setRecipeInfo] = useState({});

    useEffect(()=>{
        // for recipe after foodList loaded first
        if(!isLoading){
            fetchInfo();
        }
    },[isLoading])

    async function fetchInfo(){
        const response = await fetch(`https://api.spoonacular.com/recipes/${foodDatas[0].id}/information?apiKey=${api}`);
        const result = await response.json();
        // console.log(result);
        setRecipeInfo(result);
        setIsRecipeLoad(false);
    }
    
    return (
        <div className='relative grow rounded-lg overflow-x-hidden flex justify-between gap-5 p-0 md:p-5'>
            <Food foodDatas={foodDatas} isLoading={isLoading} setIsRecipeLoad={setIsRecipeLoad} setIsShow={setIsShow} setFoodId={setFoodId} />
            <Recipe isShow={isShow} setIsShow={setIsShow} foodId={foodId} recipeInfo={recipeInfo} setRecipeInfo={setRecipeInfo} isRecipeLoad={isRecipeLoad} setIsRecipeLoad={setIsRecipeLoad} api={api} />
        </div>
    )
}

export default Content