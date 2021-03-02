import React from 'react';

const Count = (props) => {
    // data restructuring
    const count = props.count;

    const totalPrice = count.reduce((total, prd) => total + prd.price, 0);
   
    let price = 0;
    for (let i = 0; i < count.length; i++) {
        const food = count[i];
        price = food.price;
    }
    let name = '';
    for (let i = 0; i < count.length; i++) {
        const food = count[i];
        name = food.name;
    }

    return (
        <div>
            <div className="ps-1 border rounded">
            <h3>Selected Food</h3>
            <p>Foods count : {count.length}</p>
            </div>
            <ul class="list-group">
                {
                    count.map((foods) =>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {foods.name}
                            <span style={{ background: '#31D2F2' }} className="badge badgePrimary badge-pill"> $ {foods.price}</span>
                        </li>)
                }
            </ul>

            <div className="border p-2 rounded mt-3">
                
                <p>Total Amount : $ {totalPrice}</p>
            </div>
        </div>
    );
};

export default Count;

