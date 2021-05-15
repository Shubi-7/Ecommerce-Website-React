import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
		<footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">About Us</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
								<ul className="footer-links">
									<li><Link to="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</Link></li>
									<li><Link to="#"><i className="fa fa-phone"></i>+021-95-51-84</Link></li>
									<li><Link to="#"><i className="fa fa-envelope-o"></i>email@email.com</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Categories</h3>
								<ul className="footer-links">
									<li><Link to="#">Hot deals</Link></li>
									<li><Link to="#">Laptops</Link></li>
									<li><Link to="#">Smartphones</Link></li>
									<li><Link to="#">Cameras</Link></li>
									<li><Link to="#">Accessories</Link></li>
								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Information</h3>
								<ul className="footer-links">
									<li><Link to="#">About Us</Link></li>
									<li><Link to="#">Contact Us</Link></li>
									<li><Link to="#">Privacy Policy</Link></li>
									<li><Link to="#">Orders and Returns</Link></li>
									<li><Link to="#">Terms & Conditions</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Service</h3>
								<ul className="footer-links">
									<li><Link to="#">My Account</Link></li>
									<li><Link to="#">View Cart</Link></li>
									<li><Link to="#">Wishlist</Link></li>
									<li><Link to="#">Track My Order</Link></li>
									<li><Link to="#">Help</Link></li>
								</ul>
							</div>
						</div>
					</div>
				
				</div>
			
			</div>



			<div id="bottom-footer" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<ul className="footer-payments">
								<li><Link to="#"><i className="fa fa-cc-visa"></i></Link></li>
								<li><Link to="#"><i className="fa fa-credit-card"></i></Link></li>
								<li><Link to="#"><i className="fa fa-cc-paypal"></i></Link></li>
								<li><Link to="#"><i className="fa fa-cc-mastercard"></i></Link></li>
								<li><Link to="#"><i className="fa fa-cc-discover"></i></Link></li>
								<li><Link to="#"><i className="fa fa-cc-amex"></i></Link></li>
							</ul>
							<span className="copyright">
								Copyright &copy;2021. All rights reserved | This template is ported by <Link to="http://shubhambohara.com.np" >Shubham</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
            
        </>
    )
}

export default Footer
