import React from 'react';
import './Programmer.css'

const Programmer = (props) => {
    const { name, img, prefession, born, citizenship, education, awards, salary, fields, website } = props.greatest || {}
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>Country: {citizenship}</p>
                        <p className="card-text">{born}</p>

                        <p className="prefession">Prefession: {prefession}</p>

                        <p>{education}</p>
                        <p><small>Salary: ${salary}</small></p>
                    </div>
                    <div className="button">
                        <button onClick={() => props.handleButtonInfo(props.greatest)} className="btnStyle"><i className="fas fa-shopping-cart cart"></i>
                            Add Salary
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Programmer;