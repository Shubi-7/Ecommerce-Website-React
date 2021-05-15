import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Forgetpassword = () => {
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
                                <li className="active">ForgetPassword</li>
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
                        <h1 className="h3 mb-3 font-weight-normal">Account Recovery</h1>
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        <div className="checkbox mb-3">
                        </div>
                        <button className="btn btn-lg btn-danger btn-block" type="submit">Send Password Reset Link</button>
                    </form>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Forgetpassword
