import React from 'react';
import './Programmer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />
const dollar = <FontAwesomeIcon icon={faDollarSign} />



const Programmer = (props) => {
    const { name, img, prefession, born, citizenship, education, awards, salary, fields, website } = props.greatest || {}
    return (
        <div className="card my-2 m-1" style={{ "width": '21rem' }}>
           
                <div className="imageStyle">
                    <img src={img} className="card-img-top image rounded-circle" alt="..." />

                </div>

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Country: {citizenship}</p>
                    <p className="card-text">{born}</p>

                    <p className="prefession">Prefession: {prefession}</p>

                    <p>{education}</p>
                    <p><small>Salary: {dollar}{salary}</small></p>
                </div>
                <div className="button">
                    <button onClick={() => props.handleButtonInfo(props.greatest)} className="btnStyle">
                        {element}  Add Salary

                    </button>
                </div>
           
        </div>



    );
};

export default Programmer;