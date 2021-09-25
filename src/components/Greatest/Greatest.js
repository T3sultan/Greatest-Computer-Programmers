import React, { useEffect, useState } from 'react';
import Programmer from '../Programmer/Programmer';
import './Greatest.css'
import Cart from '../Cart/Cart'

const Greatest = () => {
    const [greatestData, setGreatestData] = useState([]);
    const [cart, setCart] = useState([]);

    const handleButtonInfo = (greatest) => {
        const newCart = [...cart, greatest];
        // console.log('sdfkjds')
        setCart(newCart)

    }



    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setGreatestData(data));

    })
    return (
        <div>
            <div className="row">
                <div className="col-md-9 p-1">
                    {/* this is product load step */}
                    <div className="row">
                        {
                            greatestData.map(greatest => <Programmer
                                key={greatest.id}
                                greatest={greatest}
                                handleButtonInfo={handleButtonInfo}

                            >

                            </Programmer>)
                        }


                    </div>

                </div>
                <div className="col-md-3">
                    {/* this is cart component */}
                    <Cart
                        cart={cart}
                    >

                    </Cart>

                </div>

            </div>
        </div>
    );
};

export default Greatest;