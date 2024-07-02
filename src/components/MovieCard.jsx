import React from 'react';

function MovieCard({ movieObj, poster_path, name, handleAddtoWatchList, handleRemovefromWatchList, watchList }) {
    
    // Function to check if the movie is in watchlist
    function doesContain(movieObj) {
        return watchList.some(item => item.id === movieObj.id);
    }
  
    return (
        <div className='h-[60vh] w-[200px] bg-center bg-cover hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end m-3 rounded-lg overflow-hidden' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

            {doesContain(movieObj) ? 
            <div  onClick={() => handleRemovefromWatchList(movieObj)} className='m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                &#10060;
            </div> : <div onClick={() => handleAddtoWatchList(movieObj)} className='m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                &#10084;
            </div> }

            <div className='text-white text-xl w-full p-2 text-center bg-black bg-opacity-50'>
                {name}
            </div>

        </div>
    );
}

export default MovieCard;
