/* eslint-disable react/prop-types */

import Shimmer from "./Shimmer";


const MovieCard = ({ allMovieData = [], loading }) => {
  return (
    <>
    {loading ? <Shimmer/> :MovieCard}
      <div className="main flex px-4 flex-wrap lg:px-10">
        {allMovieData.map((item, index) => {
          const { Poster, Title, Year } = item;
          return (
            <div key={index} className="parent p-2 lg:w-1/4 w-full">
              <div className="child bg-black rounded-2xl p-3">
                <img
                  className="w-full rounded-lg mb-2"
                  src={Poster}
                  alt="image"
                />
                <h2 className="text-white text-xl font-bold">{Title}</h2>
                <h2 className="text-white text-lg mb-2">Year: {Year}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieCard;

