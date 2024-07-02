import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {

  let [watchList , setWatchList] = useState([])
  let handleAddtoWatchList = (movieObj)=>{
    let newWatchList = [...watchList , movieObj]
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchList))
    setWatchList(newWatchList)
  }

  let handleRemovefromWatchist = (movieObj)=>{
    let filteredWatchlist = watchList.filter((movie)=>{
      return movie.id != movieObj.id
    })
    localStorage.setItem('moviesApp' , JSON.stringify(filteredWatchlist))
    setWatchList(filteredWatchlist )
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage) {
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))

  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchList={handleRemovefromWatchist} watchList={watchList} /> 
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemovefromWatchist={handleRemovefromWatchist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
