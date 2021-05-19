import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import {signin,authenticate,isAuthenticated} from './index'

const Signin = () => {


    const [values, setValues] = useState({
        email: '', password: '', error: '', loading: false, redirectToReferrer: false,
    });
    const { email, password, loading, error, redirectToReferrer } = values;

    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                }
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectToReferrer: true
                        });
                    });
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

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }



    }

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


            <div className="container mycus">
                <div className="row">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        {showError()}
                        {showLoading()}
                        {redirectUser()}
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" name="Email" className="form-control" placeholder="Email address" onChange={handleChange('email')} value={email} />
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange('password')} value={password} />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-danger btn-block" onClick={clickSubmit}>Sign in</button>
                    </form>


                    <div className="text-center p-t-45 p-b-4">
                        <span className="txt1">
                            Forgot {" "}
                        </span>

                        <Link to="/forget/password" className="txt2 hov1">
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
