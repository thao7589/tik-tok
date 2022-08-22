import React, { Component } from 'react';
import FComment from './FComment';
import Comment from './Comment';

class Product extends Component {
    render() {
        return (
            <div className='ui container comments'>
                <FComment author="Thao"/>
                <Comment/>
            </div>
        )
    }
}

export default Product;