import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';


const Resetpassword = ({ match }) => {

    const [values, setValues] = useState({
        email: '', password: '', cpassword: '', error: '', success: false
    });

    const { email, password, cpassword, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const clickSubmit = (event) => {
        event.preventDefault();

        setValues({ ...values, error: false });
        const token = match.params.token

        fetch(`http://localhost:5000/api/resetpassword/${token}`, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            .then(data => {

                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values,
                        error: '', success: true
                    })
                }


            })
            .catch(err => console.log(err))


    }


    const showError = () => (

        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>

    );

    const showSuccess = () => (

        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Password has been reset successfully you can login to continue
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
                        <h1 className="h3 mb-3 font-weight-normal">Reset Password</h1>
                        {showError()}
                        {showSuccess()}
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" name="Email" className="form-control" placeholder="Email address" onChange={handleChange('email')} value={email} />
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange('password')} value={password} />
                        <label for="inputC_Password" className="sr-only">ConfirmPassword</label>
                        <input type="password" name="ConfirmPassword" className="form-control" placeholder="Confirm Password" onChange={handleChange('cpassword')} value={cpassword} />
                        <div className="checkbox mb-3">
                        </div>
                        <button className="btn btn-lg btn-danger btn-block" onClick={clickSubmit}>SignUp</button>
                    </form>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Resetpassword
