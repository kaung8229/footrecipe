import React from 'react'

function RecipeInstruction({ recipeInfo, isRecipeLoad }) {
    return (
        <div>
            <h1 className="text-slate-600 text-xl font-bold my-2">Instructions</h1>
            <ol className="list-decimal pl-5">
                {isRecipeLoad ? <p className='w-full'>Loading...</p> : (recipeInfo.analyzedInstructions[0].steps.map(inst => (
                    <li key={inst.number}>{inst.step}</li>
                )))}
            </ol>
        </div>
    )
}

export default RecipeInstruction