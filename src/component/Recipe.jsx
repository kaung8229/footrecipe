import React, { useEffect } from 'react'
import RecipeBanner from './RecipeBanner';
import RecipeIngredients from './RecipeIngredients';
import RecipeInstruction from './RecipeInstruction';

function Recipe({ isShow, setIsShow, foodId, recipeInfo, setRecipeInfo, isRecipeLoad, setIsRecipeLoad, api }) {

    const className = `h-full bg-white border rounded-lg recipe ${isShow ? "show" : ""}`;

    const showHandler = ()=>{
        setIsShow(false);
    }

    useEffect(()=>{
        // console.log(foodId);
        if(foodId){
            // setIsRecipeLoad(true);
            fetchInfo();
        }
    },[foodId])

    async function fetchInfo(){
        const response = await fetch(`https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${api}`);
        const result = await response.json();
        console.log("result");
        setRecipeInfo(result);
        setIsRecipeLoad(false);
    }

    return (
        <div className={className}>
            <div className='sticky top-0 bg-white flex justify-between pb-8 pt-5 px-5'>
                <h1 className="text-slate-600 text-2xl font-bold underline decoration-wavy underline-offset-8">Recipe</h1>
                <button type='button' className='size-8 bg-red-500 hover:bg-red-600 rounded-lg text-white font-medium recipeclose' onClick={showHandler}>X</button>
            </div>
            <div className='pb-5 px-5'>
                {isRecipeLoad ? <p className='w-full'>Loading...</p> : <RecipeBanner recipeInfo={recipeInfo} />}
                <RecipeIngredients recipeInfo={recipeInfo} isRecipeLoad={isRecipeLoad} />
                <RecipeInstruction recipeInfo={recipeInfo} isRecipeLoad={isRecipeLoad}/>
            </div>
        </div>
    )
}

export default Recipe