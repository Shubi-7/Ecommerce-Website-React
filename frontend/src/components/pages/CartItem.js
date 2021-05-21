import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { removeItem, updateItem } from './cartApi'

const CartItem = ({ product,
    cartUpdate = false,
    setRun = f => f,
    run = undefined }) => {
    const [count, setCount] = useState(product.count);


    const handleChange = productId => event => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value);
        }
    };

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div className="mb-2">

                    <span className="input-group-text">Adjust Quantity</span>

                    <input type="number" value={count} onChange={handleChange(product._id)} />

                </div>
            )
        );
    };

    return (
        <>

            <div class="col-md-3 pro-1">
                <div class="product">
                    <div class="product-img">
                        <img src={`http://localhost:5000/${product.product_image}`} style={{ height: '250px', width: '270px' }} class="img-responsive" />
                    </div>
                    <div class="product-body">
                        <h3 class="product-name"><Link to={`/productdetails/${product._id}`}>{product.product_name}</Link></h3>
                        <h4 class="product-price">Rs.{product.product_price}</h4>
                        <div class="product-rating">
                            {showCartUpdateOptions(cartUpdate)}
                        </div>
                    </div>
                    <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart" onClick={() => {
                            removeItem(product._id);
                            setRun(!run); //run useEffect in Parent Cart
                        }}></i> remove from cart</button>
                    </div>
                </div>
            </div>



        </>

    )

}

export default CartItem