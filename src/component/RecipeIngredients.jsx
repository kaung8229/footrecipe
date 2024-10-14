import React from 'react'

function RecipeIngredients({ recipeInfo, isRecipeLoad }) {
    return (
        <div className="my-8">
            <h1 className="text-slate-600 text-xl font-bold my-2">Ingredients</h1>
            <ol className="list-decimal pl-5">
                {isRecipeLoad ? <p className='w-full'>Loading...</p> : (recipeInfo.extendedIngredients.map(ingre=>(
                    <li key={ingre.id}>
                        <div className="flex">
                            <p className="w-28 sm:w-36">{ingre.nameClean}</p>
                            <span>- {ingre.measures.us.amount} {ingre.measures.us.unitLong}</span>
                        </div>
                    </li>
                )))}
            </ol>
        </div>
    )
}

export default RecipeIngredients