import React from 'react';
import './style.css';

const Pagination = ({ currentPage, nextPage, previousPage }) => {

    function renderPagination() {
        if(currentPage === 1) {
            return (
               <div className='pages'>
                    <span className='current-page'>{currentPage}</span>
                    <span className='next-page'>{currentPage + 1}</span>
               </div>
            );
        }
        else {
            return (
                <div className='pages'>
                    <span className='next-page'>{currentPage - 1}</span>
                    <span className='current-page'>{currentPage}</span>
                    <span className='next-page'>{currentPage + 1}</span>
                </div>
             );
        }
    }

    return (
        <>
            <div className='pagination-container'>
                <div className='pagination'>
                    <button className='btn btn-previous' onClick={previousPage}>&#8249;</button>
                    {renderPagination()}
                    <button className='btn btn-next' onClick={nextPage}>&#8250;</button>
                </div>
            </div>
        </>
    );
}

export default Pagination;