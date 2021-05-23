import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Card from './Card'
import { read, listRelated } from './uiApi'

const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const [relatedProduct, setRelatedProduct] = useState([])

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {
                setProduct(data)

                //after fetching single product fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error)
                    }
                    else {
                        setRelatedProduct(data)
                    }
                })
            }
        })
    }

    useEffect(() => {
        const productId = props.match.params.productId
        loadSingleProduct(productId)
    }, [props])
    return (

        <>

            <Navbar />

            <div id="breadcrumb" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">{product.product_name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 ">
                            <div id="product-main-img">
                                <div className="product-preview">
                                    <img src={`http://localhost:5000/${product.product_image}`} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="product-details">
                                <h2 className="product-name">{product.product_name}</h2>
                                <div>
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <Link className="review-link" href="#">10 Review(s) | Add your review</Link>
                                </div>
                                <div>
                                    <h3 className="product-price">{product.product_price}</h3>
                                    <span className="product-available">In Stock</span>
                                </div>
                                <p>{product.product_description}</p>

                                <div className="add-to-cart">

                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                </div>
                                <ul className="product-links">
                                    <li>Share:</li>
                                    <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-envelope"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {relatedProduct.length > 0 && (
                <Fragment>
                    <div className="section">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-12">
                                    <div className="section-title text-center">
                                        <br />
                                        <h3 className="title">Related Products</h3>
                                    </div>
                                </div>

                                <div className="product">
                                    {relatedProduct.map((product, i) => (
                                        <Card key={i} product={product} />
                                    ))}

                                </div>


                            </div>

                        </div>

                    </div>
                </Fragment>
            )}

            <Footer />

        </>
    )
}

export default ProductDetails
