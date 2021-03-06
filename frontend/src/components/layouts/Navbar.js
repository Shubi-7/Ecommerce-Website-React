import React, {Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {signout, isAuthenticated} from '../auth'
import Search from '../pages/Search'

const Navbar = ({history}) => {
    return (
        <>

            <header>

                <div id="top-header">
                    <div className="container">
                        <ul className="header-links pull-left">
                            <li><Link to="#"><i className="fa fa-phone"></i> +021-95-51-84</Link></li>
                            <li><Link to="#"><i className="fa fa-envelope-o"></i> email@email.com</Link></li>
                            <li><Link to="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</Link></li>
                        </ul>
                        <ul className="header-links pull-right">
                            <li><Link to="#"><i className="fa fa-dollar"></i> USD</Link></li>
                            {! isAuthenticated() &&(
                            <Fragment>
                            <li><Link to="/signin"><i className="fa fa-user-o"></i> My Account</Link></li>
                            </Fragment>
                            )}
                            {isAuthenticated() && isAuthenticated().user.role===0 && (
                            <li>
                                <Link to="/user/dashboard"><i className="fa fa-user" aria-hidden="true"></i> Profile
                                </Link>
                            </li>
                        )}
                        {isAuthenticated() && isAuthenticated().user.role===1 &&(
                            <li>
                                <Link to="/admin/dashboard">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                Admin dashboard
                                </Link>
                            </li>
                        )}
                        
                        {isAuthenticated()&&(
                            <Fragment>
                                <li>
                                <Link style={{cursor:'pointer', border:'none', outline:'none'}}
                                onClick={()=>signout(()=>{
                                    history.push('/');
                                })}>
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                                Sign Out</Link>
                                </li>
                            </Fragment>
                        )}
                        </ul>
                    </div>
                </div>



                <div id="header">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-3">
                                <div className="header-logo">
                                    <Link to="/" className="logo">
                                        <img src="/img/logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-6">
                            <div className="header-search">

                           <Search/>

                           </div>
                           </div>

                            <div className="col-md-3 clearfix">
                                <div className="header-ctn">
                                    <div>
                                        <Link to="#">
                                            <i className="fa fa-heart-o"></i>
                                            <span>Your Wishlist</span>
                                            <div className="qty">2</div>
                                        </Link>
                                    </div>

                                    <div className="dropdown">
                                        <Link className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span>Your Cart</span>
                                            <div className="qty">3</div>
                                        </Link>
                                        <div className="cart-dropdown">
                                            <div className="cart-list">
                                                <div className="product-widget">
                                                    <div className="product-img">
                                                        <img src="img/product01.png" alt="" />
                                                    </div>
                                                    <div className="product-body">
                                                        <h3 className="product-name"><Link to="#">product name goes here</Link></h3>
                                                        <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                                                    </div>
                                                    <button className="delete"><i className="fa fa-close"></i></button>
                                                </div>

                                                <div className="product-widget">
                                                    <div className="product-img">
                                                        <img src="img/product02.png" alt="" />
                                                    </div>
                                                    <div className="product-body">
                                                        <h3 className="product-name"><Link to="#">product name goes here</Link></h3>
                                                        <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                                                    </div>
                                                    <button className="delete"><i className="fa fa-close"></i></button>
                                                </div>
                                            </div>
                                            <div className="cart-summary">
                                                <small>3 Item(s) selected</small>
                                                <h5>SUBTOTAL: $2940.00</h5>
                                            </div>
                                            <div className="cart-btns">
                                                <Link to="#">View Cart</Link>
                                                <Link to="#">Checkout  <i className="fa fa-arrow-circle-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="menu-toggle">
                                        <Link to="#">
                                            <i className="fa fa-bars"></i>
                                            <span>Menu</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <nav id="navigation">
                <div className="container">
                    <div id="responsive-nav">
                        <ul className="main-nav nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="#">Hot Deals</Link></li>
                            <li><Link to="#">Categories</Link></li>
                            <li><Link to="#">Laptops</Link></li>
                            <li><Link to="#">Smartphones</Link></li>
                            <li><Link to="#">Cameras</Link></li>
                            <li><Link to="#">Accessories</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default withRouter(Navbar)
