import React from 'react'
import AdminNav from '../layouts/AdminNav'
import { isAuthenticated } from './index'

const AdminDashboard = () => {

    const { user: { name, email, role } } = isAuthenticated()

    return (
        <>
            <div id="wrapper">
                <AdminNav />
                <div id="page-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Admin Dashboard</h1>
                            </div>
                        </div>

                        <div className="container-fluid">
                            <h4>Welcome</h4>
                        </div>

                        <div className="col-md-12">
                            <div className="card mb-5" style={{ float: 'left', border: 'solid black 1px' }}>
                                <div className="banner-top">
                                    <h3 className="card-header">User Information</h3>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item" style={{ border: 'none', fontFamily: 'Calibri' }}>UserName: {name}</li>
                                    <br />

                                    <li className="list-group-item" style={{ border: 'none', fontFamily: 'Calibri' }}>Email: {email}</li><br />
                                    <li className="list-group-item" style={{ border: 'none', fontFamily: 'Calibri' }}>Role: {role === 1 ? 'Admin' : 'Registered User'}</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
