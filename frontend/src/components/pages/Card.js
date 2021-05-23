import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { addItem } from './cartApi'


const Card = ({ product }) => {
    const [redirect, setRedirect] = useState(false);

    const addToCart = () => {
        // console.log('added');
        addItem(product, setRedirect(true));
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    return (
        <>
        <div class="col-md-3 pro-1">
            <div class="product">
                <div class="product-img">
                    {shouldRedirect(redirect)}
                    <img src={`http://localhost:5000/${product.product_image}`} style={{ height: '250px', width: '270px' }} class="img-responsive"  />
                </div>
                <div class="product-body">
                    <h3 class="product-name"><Link to={`/productdetails/${product._id}`}>{product.product_name}</Link></h3>
                    <h4 class="product-price">Rs.{product.product_price}</h4>
                    <div class="product-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn" onClick={addToCart}><i class="fa fa-shopping-cart"></i> add to cart</button>
                </div>
            </div>
            </div>


        </>
    )
}

export default Card





