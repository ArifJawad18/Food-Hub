import React from 'react';
import burger from '../../assets/images/burger.jpg';
import chicken from '../../assets/images/chicken.jpg';
import drinks from '../../assets/images/drinks.jpg';
import pizza from '../../assets/images/pizza.jpg';
import rice from '../../assets/images/rice.jpg';
import Food from './Food';

const Foods = () =>{

    const foodsData = [
        {
            id: 1,
            name:'Burger',
            description:'Choose Your Favorite Burger.Find Desserts or Every Taste',
            img: burger
        },
        {
            id: 2,
            name:'Pizza',
            description:'Choose Your Favorite Pizza.Find Desserts or Every Taste',
            img: pizza
        },
        {
            id: 3,
            name:'Chicken',
            description:'Choose Your Favorite Chicken.Find Desserts or Every Taste',
            img: chicken
        },
        {
            id: 4,
            name:'Drinks',
            description:'Choose Your Favorite Drinks.Find Desserts or Every Taste ',
            img: drinks
        },
        {
            id: 5,
            name:'Rice',
            description:'Choose Your Favorite Rice.Find Desserts or Every Taste',
            img: rice
        },
    ] 



    return (
        <div  className='mt-12'>
          <div className='text-center  data-aos="flip-left'>
            <h3 className='text-3xl font-bold text-blue-500 uppercase
            '>Popular Menu</h3>
            <h2 className='text-2xl font-bold'> Food Items</h2>
          </div>
          <div className='grid gap-[34px] grid-cols-1 md:grid-cols-5 lg:grid
          -cols-3 mt-8'>
            {
                foodsData.map(food => <Food
                key={food.id}
                food={food}
                ></Food>)
            }

          </div>
        </div>
    );
};

export default Foods;