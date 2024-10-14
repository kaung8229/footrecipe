import React, { useRef } from 'react'

function FoodItem({ food, setIsShow, setFoodId, setIsRecipeLoad }) {

    const viewHandler = (e)=>{
        // console.log(e.target.id);
        setIsShow(true);
        setIsRecipeLoad(true);
        setFoodId(e.target.id);
    }

    return (
        <div className='w-full'>
            <div className="w-full h-36 rounded-lg overflow-hidden">
                <img src={food.image} className="size-full object-cover" alt="" />
            </div>
            <h3 className="text-lg font-medium my-2">{food.title}</h3>
            <button id={food.id} className="bg-indigo-400 hover:bg-indigo-500 text-sm font-medium rounded-lg px-4 py-2" onClick={viewHandler}>View Recipe</button>
        </div>
    )
}

export default FoodItem