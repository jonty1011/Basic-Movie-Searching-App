THis is basic movie app kind of beginner level design project for quick react practice
3 components 
navbar
searchbar
movieCard

mistake - 1. in hurry i passed props in not correct way 
running useEffect have to pass empty array otherwise 
Use default values (allMovieData = []) to prevent .map() from breaking when data is missing.

div key={index} className="parent p-2 lg:w-1/4 w-full"> have to put in parent class but put it in chlid 
<div key={index} className="child bg-black rounded-2xl p-3"> 