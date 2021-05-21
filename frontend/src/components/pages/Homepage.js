import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Card from './Card'
import { getProducts } from './uiApi'

const Homepage = () => {
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data)
            }
        })
    }
    useEffect(() => {
        loadProductsByArrival()

    }, [])
    return (
        <>

            <Navbar />

            <div class="col-md-12">
                <div class="section-title">
                    <h3 class="title">New Products</h3>
                    <div class="section-nav">
                        <ul class="section-tab-nav tab-nav">
                            <li class="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                            <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                            <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                            <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="row">
                    <span><i></i></span>
                    <div class="row">
                        {productsByArrival.map((product, i) => (
                            <Card key={i} product={product} />
                        ))}
                    </div>
                    <span><i></i></span>
                </div>
            </div>

            <br/>
            <br/>

            <Footer />


        </>
    )
}

export default Homepage
