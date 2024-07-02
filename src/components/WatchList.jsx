import React, { useEffect, useState } from "react";
import genreIds from "../utility/genre";

function WatchList({ watchList, setWatchList, handleRemovefromWatchist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedInc = watchList.sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );
    setWatchList([...sortedInc]);
  };
  let sortDecreasing = () => {
    let sortedDec = watchList.sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );
    setWatchList([...sortedDec]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-3 p-5 bg-gray-100 rounded-lg shadow-md">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={`px-4 py-2 rounded-lg cursor-pointer 
        ${currGenre === genre ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"}
        transition duration-300 ease-in-out`}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-12 w-72 px-4 bg-white border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-md m-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                IMDB Ratings
                <div className="inline-flex ml-1 cursor-pointer">
                  <i
                    onClick={sortIncreasing}
                    className="fa-solid fa-arrow-up hover:text-blue-500 hover:scale-110 transition duration-300 ease-in-out"
                  ></i>
                  <i
                    onClick={sortDecreasing}
                    className="fa-solid fa-arrow-down ml-1 hover:text-blue-500 hover:scale-110 transition duration-300 ease-in-out"
                  ></i>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Popularity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Genre
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {watchList
              .filter(
                (movieObj) =>
                  currGenre === "All Genres" ||
                  movieObj.genre_ids.some(
                    (id) => genreIds[id] === currGenre
                  )
              )
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-24 w-16">
                        <img
                          className="h-24 w-auto rounded-lg object-cover"
                          src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                          alt={movieObj.title}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {movieObj.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {movieObj.vote_average}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {movieObj.popularity}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {genreIds[movieObj.genre_ids[0]]}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => handleRemovefromWatchist(movieObj)}
                      className="text-red-800 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
