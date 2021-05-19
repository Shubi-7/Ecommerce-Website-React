import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

import {forgetpassword} from './index'

const Forgetpassword = () => {

    const [values, setValues] = useState({
        email: '', error: '', loading: false, success: false
    });
    const { email, loading, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        forgetpassword({ email })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false, success: false })
                }
                else {

                    setValues({
                        ...values,
                        email: '', error: '', success: true
                    })
                }
            });
    };

    const showError = () => (
        <div className="alert alert-danger mb-3" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (<div className="alert alert-info">
            <h2>Loading....</h2>
        </div>
        );
    const showSuccess = () => (

        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            password reset verification link has been sent to your email
        </div>

    );

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

            <div className="container mycus">
                <div className="row">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Account Recovery</h1>
                        {showLoading()}
                        {showSuccess()}
                        {showError()}
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" name="Email" className="form-control" placeholder="Email address" onChange={handleChange('email')} value={email} />
                        <div className="checkbox mb-3">
                        </div>
                        <button className="btn btn-lg btn-danger btn-block" onClick={clickSubmit}>Send Password Reset Link</button>
                    </form>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Forgetpassword
