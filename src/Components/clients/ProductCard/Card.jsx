import React from 'react';
import './Card.css';

const Card = ({products}) => {
    console.log(products, 'products in card');
    return (
        <div className="cards">
            {products?.map((prod) => {
                return (
                    <div className="tpn_card">
                        <img src={prod?.image} className="w-10 mb-4" />
                        <h5>{prod.title}</h5>
                        <p>{prod.description}</p>
                        <a href="javascript:;" className="btn tpn_btn">Explore</a>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
