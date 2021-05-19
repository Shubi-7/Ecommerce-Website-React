import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'


// import Signin from './Signin'

const Confirm = ({ match }) => {
    const [values, setValues] = useState({
        error: '', success: false
    });

    const { success, error } = values;
    useEffect(() => {

        const token = match.params.token
        console.log(token)
        fetch(`http://localhost:5000/api/confirmation/${token}`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            }
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





    }, [match.params.token, values])

    const showError = () => (

        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>

    );

    const showSuccess = () => (

        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Congrats your Account is verified you can sign in to continue .......
        </div>

    );
    return (
        <>
        <Navbar/>

            <div id="breadcrumb" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="breadcrumb-header">Verification</h3>
                            <ul className="breadcrumb-tree">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Confirm User</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mycus">
                <div className="row">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Verify User</h1>
                        {showError()}
                        {showSuccess()}
                    <Link to="/signin">Please Click Here For Login.</Link>

                    </form>


                </div>
            </div>

            <Footer/>


        </>
    )
}

export default Confirm
