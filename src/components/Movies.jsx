import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddtoWatchList, handleRemovefromWatchList, watchList}) {

  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = ()=>{
    if(pageNo==1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
  }
  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0d0f5b6b8b102b732ea14435ae02a221&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
    })
  } , [pageNo])

  return (
      <div className='p-3'>
        <div className=' text-3xl p-2 font-bold text-center'>
          Movie Catalogue
        </div>
        <div className='flex flex-row flex-wrap justify-around m-6'>
          {movies.map((movieObj)=>{
              return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name = {movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchList={handleRemovefromWatchList} watchList={watchList}/>
          })}
        </div>
        <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
      </div>
  )
}

export default Movies



