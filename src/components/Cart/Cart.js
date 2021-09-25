import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {};
    // console.log(props)
    const sumReducer = (previousValue, currentValue) => {
        return previousValue + currentValue.salary
    }
    const total = cart.reduce(sumReducer, 0);

    return (
        <div className="card border-info mb-3 my-5" style={{ "max-width": '18rem' }}>
            <div className="card-header">
                <h3><i class="fas fa-shopping-cart"></i>
                    {cart.length}

                </h3>
            </div>
            <div className="card-body text-primary">
                <p>Total :{total} </p>
            </div>
            {
                cart.map(greatest => <li>{greatest.name}</li>)
            }
        </div>
    );
};

export default Cart