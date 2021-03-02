import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import foodItems from '../foodData/foodData.json'
import Product from '../Product/Product';

const FoodItems = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(foodItems)
    }, [])

    const [count, setCount] = useState([])
    const handleAddedClick = (players) => {
        const newCount = [...count, players]
        setCount(newCount);
    }

    return (
        <div className="container mt-5">
            <div className="row d-flex">
                <section className="col-lg-9">
                        <div className="row">
                            {
                                products.map(product => <Product handleAddedClick={handleAddedClick} key={product.id} product={product} ></Product>)
                            }
                        </div>
                </section>
                
                    <section className=" rounded col-lg-3 col-md-4">
                        <Count count={count}></Count>
                    </section>
                
            </div>
        </div>
    );
};

export default FoodItems;