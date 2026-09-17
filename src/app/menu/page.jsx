import React from 'react';
import FoodCard from '../components/FoodCard';

const MenuPage = async() => {

    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await res.json();
    const foods = data.data;


    console.log('Foot data', foods)

    return (
        <div>
            <h2 className='text-center pt-10 text-4xl font-semibold'>Menu Page</h2>

            <div className='max-w-7xl mx-auto grid grid-cols-2 gap-8 my-[50px]'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default MenuPage;