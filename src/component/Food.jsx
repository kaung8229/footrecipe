import React from 'react'
import FoodItem from './FoodItem'

function Food({ foodDatas, isLoading, setIsRecipeLoad, setIsShow, setFoodId }) {
    return (
        <div className="relative h-full food">
            <h1 className="sticky top-0 bg-white text-center text-slate-600 text-2xl font-bold underline decoration-wavy underline-offset-8 pb-8 pt-5">Food</h1>

            <div className="foodItemList">
                {isLoading ? <p className='w-full'>Loading...</p> : (foodDatas.map(food=> (
                    <FoodItem key={food.id} food={food} setIsShow={setIsShow} setFoodId={setFoodId} setIsRecipeLoad={setIsRecipeLoad} />
                )))}
            </div>
        </div>
    )
}

export default Food