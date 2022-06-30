import React from 'react';
import './style.css';

const Header = ({ onChange }) => {

    const currencies = ['USD', 'BRL'];

    return (
        <>
            <header>
                <h2>Crypto App</h2>

                <select onChange={onChange}> 
                    {currencies?.map((currency, index) => {
                        return (
                            <option key={index}>{currency}</option>
                        );
                    })}
                </select>
            </header>
        </>
    );
}

export default Header;