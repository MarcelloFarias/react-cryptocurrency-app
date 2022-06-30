import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CoinDetails = ({ coin }) => {
    return (
        <>
            <main>
                <div className='image-container'>
                    <img src={coin?.image?.large} />
                    <div className='name-symbol-container'>
                        <h2>Name: {coin?.name}</h2>
                        <p>Symbol: {coin?.symbol === undefined ? 'Not Found' : coin?.symbol.toUpperCase()}</p>
                        <Link to='/' className='btn-go-back'>Go Back</Link>
                    </div>
                </div>
                <div className='description-container'>
                    <p>{coin?.description?.en}</p>
                </div>
            </main>
        </>
    );
}

export default CoinDetails;