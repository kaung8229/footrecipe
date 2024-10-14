import React from 'react'

function RecipeBanner({ recipeInfo }) {
    return (
        <>
            <div className="w-full h-64">
                <img src={recipeInfo.image} className="size-full object-cover" alt="" />
            </div>
            <h1 className="text-slate-600 text-xl font-bold my-3">{recipeInfo.title}</h1>
            <ul className="flex flex-wrap gap-3">
                <li className="bg-indigo-100 rounded-full text-indigo-600 font-medium px-3 py-1">
                    Time - {recipeInfo.readyInMinutes} minutes
                </li>
                <li className="bg-green-100 rounded-full text-green-600 font-medium px-3 py-1">
                    Food type - {recipeInfo.vegetarian ? "vegetarian" : "non-vegetarian"}
                </li>
            </ul>
        </>
    )
}

export default RecipeBanner