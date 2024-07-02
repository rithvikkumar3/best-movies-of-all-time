import React from 'react';

function Pagination({ handlePrev, handleNext, pageNo }) {
    return (
        <div className='bg-gray-200 py-4 flex items-center justify-center'>
            <button
                onClick={handlePrev}
                className='px-4 py-2 mx-1 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400'
                disabled={pageNo === 1}
            >
                <i className='fas fa-arrow-left mr-1'></i> Prev
            </button>
            <span className='text-gray-700 mx-4'>{pageNo}</span>
            <button
                onClick={handleNext}
                className='px-4 py-2 mx-1 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400'
            >
                Next <i className='fas fa-arrow-right ml-1'></i>
            </button>
        </div>
    );
}

export default Pagination;
