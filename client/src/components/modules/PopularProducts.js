import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../actions/productActions.js';
import ProductBlock from './ProductBlock.js';

export default function PopularProducts() {

    const dispatch = useDispatch();
    const { products } = useSelector( state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    
    // if (ProductsIsLoading) { return ( <LoadingModule></LoadingModule> ); }
    if (products) {
        return (
            <div className="popular-produts">
                <h2>Popular products</h2>
                <p>Check out our latest collections</p>
    
                <div className="products-container">
                    {
                        products?.map((product) =>
                            (<ProductBlock key={product?._id} product={product} />)
                    )}
                </div>
                <button className="view-all"><Link to="/store">View Store</Link></button>
            </div>
        )
    } else return null
     
}

