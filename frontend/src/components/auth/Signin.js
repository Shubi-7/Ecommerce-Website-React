import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Signin = () => {
    return (
        <>

            <Navbar />


            <div id="breadcrumb" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="breadcrumb-header">Login</h3>
                            <ul className="breadcrumb-tree">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </div>


            <div className="container mycus">
                <div className="row">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-danger btn-block" type="submit">Sign in</button>
                    </form>

                    
					<div className="text-center p-t-45 p-b-4">
						<span className="txt1">
							Forgot {" "}
						</span>

						<Link to="/forgetpassword" className="txt2 hov1">
							Username / Password?
						</Link>
					</div>

					<div className="text-center">
						<span className="txt1">
							Create an account?
						</span>

						<Link to="/signup" className="txt2 hov1">
                        {" "} Sign up
						</Link>
					</div>
                </div>
            </div>

            <Footer />


        </>
    )
}

export default Signin
