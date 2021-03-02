import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCheck } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, price, image } = props.product;
    const [isClicked, setIsClicked] = useState(false);


    const handleAddedClick = props.handleAddedClick;
    return (
        <div className="mt-5 p-0 col-lg-4 col-md-6">
                <img style={{width:'250px',}} src={image}></img>
                <div className="ms-3">
                    <h5>{name}</h5>
                    <p>$ {price}</p>
                    <button disabled={isClicked} class="mt-4 px-5 btn btn-info" onClick={() => {
                        handleAddedClick(props.product)
                        setIsClicked(true)
                    }}>
                        {isClicked ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faShoppingCart} />}
                    </button>
                </div>
           
        </div>
    );
};

export default Product;