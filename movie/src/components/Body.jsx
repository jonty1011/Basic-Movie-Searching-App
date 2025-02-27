import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"


const Body = () => {
    const [allMovieData , setAllMovieData] = useState([]);
    const [searchMovie , setSearchMovie] = useState('');
    const [loading  , setLoading] = useState(false);

    const fetchMovieData = async() => {
        
        try {
            if (!searchMovie) return;
            setLoading(true);
         const response = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
         const data = await response.json();
        
         setAllMovieData(data.Search);
          console.log(data.Search);
          setLoading(false);
        }
        catch(e){
            setLoading(false);
        console.log(e);
        
        } 
    }
    useEffect(()=>{
        fetchMovieData();
    },[searchMovie]);

  return (
    <>
    <div className="bg">
    <Navbar/>
      <SearchBar searchMovie={searchMovie} 
      setSearchMovie={setSearchMovie}
        fetchMovieData={fetchMovieData}/>
      <MovieCard
       allMovieData={allMovieData} 
       loading={loading}/>
    </div>
    </>
  )
}

export default Body
