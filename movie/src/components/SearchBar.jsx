
// eslint-disable-next-line react/prop-types
const SearchBar = ({searchMovie, setSearchMovie, fetchMovieData}) => {
  return (
    <>
    <div className="main flex justify-center py-4 px-4">
        <input
        className="outline-none border-b-2 w-90 placeholder-gray-400 px-3 py-2 text-black-500 break-words text-gray-300"
        type="text" 
        placeholder="search" 
        value={searchMovie}
        onChange={(e)=> setSearchMovie(e.target.value)}/>
        <button 
        onClick={fetchMovieData}
        className="bg-purple-700 px-3 py-2 rounded-r-lg text-white">
            Search
            </button>
    </div>
    </>
  )
}

export default SearchBar
