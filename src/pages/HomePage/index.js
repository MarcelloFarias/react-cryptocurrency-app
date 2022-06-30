import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index.js';
import Carousel from '../../components/Carousel/index.js';
import CoinsList from '../../components/CoinsList/index.js';
import Pagination from '../../components/Pagination/index.js';
import './style.css';

const HomePage = () => {

    const [ currency, setCurrency ] = useState('USD');
    const [ symbol, setSymbol ] = useState('$');
    const [ page, setPage ] = useState(1);

    useEffect(() => {
        if(currency === 'USD') {
            setSymbol('$');
        }
        else {
            setSymbol('R$');
        }
    }, [currency]);

    function nextPage() {
        if(page >= 1) {
            setPage(page + 1);
        }
        return;
    }

    function previousPage() {
        if(page > 1) {
            setPage(page - 1);
        }
        return;
    }

    return (
        <>
            <Header onChange={(e) => setCurrency(e.target.value)}/>
            <Carousel currentCurrency={currency} currentSymbol={symbol} />
            <CoinsList currentCurrency={currency} currentSymbol={symbol} currentPage={page} />
            <Pagination currentPage={page} nextPage={nextPage} previousPage={previousPage} />
        </>
    );
}

export default HomePage;