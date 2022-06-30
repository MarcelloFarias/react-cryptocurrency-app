import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index.js';
import CoinDetails from '../../components/CoinDetails/index.js';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {

    const [ coin, setCoin ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setCoin(data);
            console.log(data);
        })
        .catch((error) => console.log(error));
    }, [id]);

    return (
        <>
            <Header />
            <CoinDetails coin={coin} />
        </>
    );
}

export default DetailsPage;