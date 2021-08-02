import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const Products = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => setProducts(res.data));
    }, [])

    return (
        <div>
            <div>
                <h3>All products</h3>
            </div>
            <div>
                {
                    products.map((value, key) => {
                        let url = "/product/"+value._id;
                        return <p key={key}> <Link to={url}>{value.title}</Link> </p>
                    })
                }
            </div>
        </div>
    )
}

export default Products
