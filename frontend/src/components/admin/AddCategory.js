import React, {useState} from 'react'
import AdminNav from '../layouts/AdminNav'
import {isAuthenticated} from '../auth'
import {createCategory} from './apiAdmin'

const AddCategory = () => {

    const [category_name, setName] = useState('')
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	//destructure user and token from localstorage
	const { user, token } = isAuthenticated()


	const handleChange = (e) => {
		setError('')
		setName(e.target.value)

	}

	const clickSubmit = (e) => {
		e.preventDefault()
		setError('')
		setSuccess(false)
		//make request to api to create category
		createCategory(user._id, token, { category_name })
			.then(data => {
				if (data.error) {
					setError(data.error);
				}
				else {
					setError("");
					setSuccess(true);
				}
			})

	}

	const showSuccess=()=>{
		if(success){
		   return <h5 align="left" className="text-success">Category is Added</h5> 
		}
	}

	const showError=()=>{
		if(error){
			return <h5 align="left" className="text-danger">{error}</h5>
		}
	}

    return (
        <>

            <div id="wrapper">
                <AdminNav />
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Add Category</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Category
                                </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <form role="form">
                                                {showError()}
                                                {showSuccess()}
                                                    <div className="form-group">
                                                        <label>Enter Category Name</label>
                                                        <input className="form-control" name="category" required="" onChange={handleChange} value={category_name}/>
                                                        <p className="help-block">Example category name for product type.</p>
                                                    </div>
                                                    <button type="submit" className="btn btn-default" onClick={clickSubmit}>Add Category</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddCategory


