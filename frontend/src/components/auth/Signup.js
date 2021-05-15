import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Signup = () => {
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
                                <li className="active">SignUp</li>
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
                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                        <label for="inputuserName" className="sr-only">UserName</label>
                        <input type="textbox" id="inputUsername" className="form-control" placeholder="Username" required autofocus />
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label for="inputC_Password" className="sr-only">ConfirmPassword</label>
                        <input type="password" id="inputC_Password" className="form-control" placeholder="Confirm Password" required />
                        <div className="checkbox mb-3">
                        </div>
                        <button className="btn btn-lg btn-danger btn-block" type="submit">SignUp</button>
                    </form>
                </div>
            </div>

            <Footer />


        </>
    )
}

export default Signup
