import React, { useState, useEffect } from 'react';
import CarouselCoin from '../CarouselCoin/index.js';
import './style.css';

const Carousel = ({ currentCurrency, currentSymbol }) => {

    const [ trendingCoins, setTrendingCoins ] = useState([]);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        .then((response) => response.json())
        .then((data) => {
            setTrendingCoins(data);
        })
        .catch((error) => console.log(error));
    }, [currentCurrency]);

    return (
        <>
            <div className='carousel-container'>
                <ul className='carousel'>
                    {trendingCoins.map((coin, index) => {
                        return (
                            <CarouselCoin key={index} coin={coin} symbol={currentSymbol}/>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Carousel;