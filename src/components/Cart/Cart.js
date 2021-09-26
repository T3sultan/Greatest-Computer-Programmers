import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign,faUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faDollarSign} />
const user = <FontAwesomeIcon icon={faUser} />


const Cart = (props) => {
    const { cart } = props || {};
    // console.log(props)
    const sumReducer = (previousValue, currentValue) => {
        return previousValue + currentValue.salary
    }
    const total = cart.reduce(sumReducer, 0);

    return (
        <div className="card border-light mb-3 my-5" style={{ "max-width": '18rem' }}>
            <div className="card-header">
                <h3><i class="fas fa-shopping-cart"></i>
                   {user} {cart.length}

                </h3>
            </div>
            <div className="card-body text-primary">
                <p>Salary: {element}{total} </p>
            </div>
            {
                cart.map(greatest => <li>{greatest.name}</li>)
            }
        </div>
    );
};

export default Cart