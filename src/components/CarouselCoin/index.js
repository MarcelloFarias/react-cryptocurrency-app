import React from 'react';
import './style.css';

const CarouselCoin = ({ coin, symbol }) => {
    return (
        <>
            <li className='carousel-coin'>
                <div className='carousel-coin-name-image'>
                    <img className='carousel-coin-image' src={coin?.image} alt='carousel-coin' />
                    <span className='carousel-coin-name'>{coin?.name}</span>
                </div>

                <span className='carousel-coin-price'>{symbol} {coin?.current_price.toFixed(2).replace('.', ',')}</span>

                <div className='carousel-coin-infos'>
                    <span className='carousel-coin-symbol'>{coin?.symbol.toUpperCase()}</span>
                    <span className={coin?.price_change_percentage_24h < 0 ? 'carousel-coin-percentage-red' : 'carousel-coin-percentage-green'}>{coin?.price_change_percentage_24h.toFixed(2)}%</span>
                </div>
            </li>
        </>
    );
}

export default CarouselCoin;