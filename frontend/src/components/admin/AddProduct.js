import React, { useState, useEffect } from 'react'
import AdminNav from '../layouts/AdminNav'
import { isAuthenticated } from '../auth'
import { createProduct, getCategories } from './apiAdmin'

const AddProduct = () => {

    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        product_name: '',
        product_description: '',
        product_price: '',
        categories: [],
        category: '',
        product_quantity: '',
        product_image: '',
        loading: false,
        error: '',
        success: false,
        redirectToProfile: false,
        formData: ''
    })
    const {
        product_name,
        product_description,
        product_price,
        categories,
        category,
        product_quantity,
        loading,
        error,
        success,
        redirectToProfile,
        formData

    } = values;

    //load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, categories: data, formData: new FormData });
            }
        })
    }

    //to send form data
    useEffect(() => {
        init();
    }, [])

    const handleChange = name => event => {
        const value = name === 'product_image' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: '', loading: true });
        createProduct(user._id, token, formData)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                } else {
                    setValues({
                        ...values, name: '', description: '', product_image: '', price: '', quantity: '',
                        loading: false, success: true
                    });
                }

            });
    };


    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>

    );
    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            <h4>Product is Created!</h4>
        </div>

    );

    const showLoading = () => (
        loading && (
            <div className="alert alert-success" >
                <h4>Loading....</h4>
            </div>
        )
    );

    return (
        <>

            <div id="wrapper">
                <AdminNav />
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Add Product</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Product
                                </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <form role="form">
                                                    {showError()}
                                                    {showLoading()}
                                                    {showSuccess()}
                                                    <div className="form-group">
                                                        <label>Product Name </label>
                                                        <input className="form-control" placeholder="Enter Product Name" name="product" onChange={handleChange('product_name')} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Product Price </label>
                                                        <input className="form-control" placeholder="Enter Product Price" name="Price" onChange={handleChange('product_price')} required="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Product Quantity </label>
                                                        <input className="form-control" placeholder="Enter Product Quantity" name="Quantity" onChange={handleChange('product_quantity')} required="" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Description</label>
                                                        <textarea className="form-control" rows="3" name="description" required="" placeholder="Description" onChange={handleChange('product_description')} ></textarea>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Category</label>
                                                        <select onChange={handleChange('category')} className="form-control" >
                                                            <option>Please select</option>
                                                            {categories && categories.map((c, i) => (
                                                                <option key={i} value={c._id}>{c.category_name}</option>

                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Product Image</label>
                                                        <input type="file" name="product_image" className="form-control" accept="image/x-png,image/gif,image/jpeg" style={{ border: 'none' }} onChange={handleChange('product_image')} />
                                                    </div>

                                                    <button type="submit" className="btn btn-default" onClick={clickSubmit}>Add Product</button>
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

export default AddProduct


