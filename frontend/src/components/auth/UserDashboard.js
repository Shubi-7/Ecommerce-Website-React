import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import { isAuthenticated } from './index'

const UserDashboard = () => {

    const { user: { name, email, role } } = isAuthenticated()


    return (
        <>

        <Navbar/>
            <div id="breadcrumb" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="breadcrumb-header">User Dashboard</h3>
                            <ul className="breadcrumb-tree">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">User Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mycus">
                <div className="row">

                </div>
            </div>


            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="card mb-5" style={{ float: 'left', border: 'solid black 1px' }}>
                            <div className="banner-top">
                                <h3 className="card-header"><b>User Information</b></h3>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item" style={{ border: 'none', fontFamily: 'Calibri' }}>Name : {name}</li><br />
                                <li className="list-group-item" style={{ border: 'none', fontFamily: 'Calibri' }}>Email : {email}</li><br />
                                <li className="list-group-item" style={{ border: 'none', fontFamily: 'Calibri' }}>Role : {role === 1 ? 'Admin' : 'Registered User'}</li>

                            </ul>
                        </div>



                        <div className="col-md-12 " >


                            <div className="card mb-5" >

                                <h3 className="card-header" style={{ textAlign: 'center' }}><b>Purchase History</b></h3>

                                <ul className="list-group" >
                                    <li className="list-group-item" style={{ textAlign: 'center', border: 'none' }}>History</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default UserDashboard
