import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import {signup} from './index'

const Signup = () => {

    const [values, setValues] = useState({
        name: '', email: '', password: '', error: '', success: false
    })
    const { name, email, password, error, success } = values

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false })
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({ ...values, name: '', email: '', password: '', error: '', success: true })
                }
            })
    }
    //to show success message
    const showSuccessMsg = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            <h5>Account has been created, verify your accouny before login</h5>
        </div>
    )

    //to show error message
    const showErrorMsg = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

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

            {/* <div className="section">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </div>
 */}

            <div className="container mycus">
                <div className="row">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                        {showErrorMsg()}
                        {showSuccessMsg()}
                        <label for="inputuserName" className="sr-only">UserName</label>
                        <input type="textbox" name="Username" className="form-control" placeholder="Username" onChange={handleChange('name')} value={name} />
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" name="Email" className="form-control" placeholder="Email address" onChange={handleChange('email')} value={email} />
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange('password')} value={password} />
                        <label for="inputC_Password" className="sr-only">ConfirmPassword</label>
                        <input type="password" name="Confirm Password" className="form-control" placeholder="Confirm Password" required />
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

export default Signup
