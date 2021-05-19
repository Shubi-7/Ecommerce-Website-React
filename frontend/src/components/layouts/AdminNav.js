import React,{Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from '../auth/index'

const AdminNav = ({history}) => {

    const { user: { name, email, role } } = isAuthenticated()
    return (
        <>

<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/admin/dashboard">Ecommerce-Admin</Link>
                    </div>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <ul className="nav navbar-nav navbar-left navbar-top-links">
                        <li><Link to="/"><i className="fa fa-home fa-fw"></i> Website</Link></li>
                    </ul>

                    <ul className="nav navbar-right navbar-top-links">
                        <li className="dropdown navbar-inverse">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to="#">
                                <i className="fa fa-bell fa-fw"></i> <b className="caret"></b>
                            </Link>
                            <ul className="dropdown-menu dropdown-alerts">
                                <li>
                                    <Link to="#">
                                        <div>
                                            <i className="fa fa-comment fa-fw"></i> New Comment
                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <Link className="text-center" to="#">
                                        <strong>See All Alerts</strong>
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to="#">
                                <i className="fa fa-user fa-fw"></i> {name} <b className="caret"></b>
                            </Link>
                            <ul className="dropdown-menu dropdown-user">
                                <li><Link to="#"><i className="fa fa-user fa-fw"></i> User Profile</Link>
                                </li>
                                <li><Link to="#"><i className="fa fa-gear fa-fw"></i> Settings</Link>
                                </li>
                                <li className="divider"></li>
                                {isAuthenticated()&&(
                                    <Fragment>
                                    <li><Link onClick={()=>signout(()=>{
                                        history.push('/');
                                    })}>
                                    <i className="fa fa-sign-out fa-fw"></i> Logout</Link></li>
                                    </Fragment>

                                )}
                            </ul>
                        </li>
                    </ul>

                    <div className="navbar-default sidebar" role="navigation">
                        <div className="sidebar-nav navbar-collapse">

                            <ul className="nav" id="side-menu">
                                <li className="sidebar-search">
                                    <div className="input-group custom-search-form">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/admin/dashboard" className="active"><i className="fa fa-dashboard fa-fw"></i> Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/create/category" className="active"><i className="fa fa-list"></i> Add-Category</Link>
                                </li>
                                <li>
                                    <Link to="/create/product" className="active"><i className="fa fa-product-hunt "></i> Add-Product</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
        </>
    )
}

export default withRouter(AdminNav)


