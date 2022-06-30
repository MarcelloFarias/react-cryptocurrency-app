import React, { useState, useEffect } from 'react';
import Coin from '../Coin/index.js';
import './style.css';

const CoinsList = ({ currentCurrency, currentSymbol, currentPage }) => {

    const [ coins, setCoins ] = useState([]);
    const [ inputValue, setInputValue ] = useState('');
    const [ isVisible, setIsVisible ] = useState(false);

    function handleVisibility() {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=market_cap_desc&per_page=100&page=${currentPage}&sparkline=false`)
        .then((response) => response.json())
        .then((data) => {
            setCoins(data);
        })
        .catch((error) => console.log(error));
    }, [currentCurrency, currentPage]);

    return (
        <>
            <div className='coins-list-container'>
                <div className='search-container'>
                    <button className='btn-search' onClick={handleVisibility} style={{display: isVisible ? 'none' : 'block'}}>Search</button>
                    <input className='input-search' type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search here...' style={{display: isVisible ? 'block' : 'none'}} />
                </div>
                <div className='coins-list-header'>
                    <span>Coin</span>
                    <span>Symbol</span>
                    <span>Price</span>
                    <span>Price Change 24h</span>
                </div>
                <ul className='coins-list'>
                    {coins.filter((coin) => {
                        if(coin.name.toLowerCase().includes(inputValue.toLocaleLowerCase())) {
                            return coin;
                        }
                        else {
                            return;
                        }
                    }).map((coin, index) => {
                        return (
                            <Coin key={index} coin={coin} symbol={currentSymbol}/>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default CoinsList;