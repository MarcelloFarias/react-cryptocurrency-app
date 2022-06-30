import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Coin = ({ coin, symbol }) => {

    function renderCoinPricePercentage() {
        if(coin?.price_change_percentage_24h === null) {
            return (
                <span>Not found</span>
            );
        }
        else {
            return (
                <span className={coin?.price_change_percentage_24h < 0 ? 'coin-percentage-red' : 'coin-percentage-green'}>{coin?.price_change_percentage_24h.toFixed(2)}%</span>
            );
        }
    }

    return (
        <>
            <Link to={`/details/${coin?.id}`} style={{textDecoration: 'none'}}>
                <li className='coin'>
                    <div className='coin-name-image'>
                        <img className='coin-image' src={coin?.image} alt='coin'/>
                        <span className='coin-name'>{coin?.name}</span>
                    </div>
                    <span className='coin-symbol'>{coin?.symbol.toUpperCase()}</span>
                    <span className='coin-price'>{symbol} {coin?.current_price.toFixed(2).replace('.', ',')}</span>
                    {renderCoinPricePercentage()}
                </li>
            </Link>
        </>
    );
}

export default Coin;