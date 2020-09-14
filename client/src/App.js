import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch, useParams } from 'react-router-dom'

import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(({ data }) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <Router>
      <SavedList list={[ /* This is stretch */]} />
      <hr />
      <Switch>
        <Route exact path="/" children={<MovieList movies={movieList} />} />
        <Route path="/movies/:id" children={<Movie />} />
      </Switch>
    </Router>
  );
}


// function Movie() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// function Movies({ moviesList }) {
//   return (
//     <div>
//       {moviesList.map((movie) => {
//         return (
//           <div>
//             <h1>{movie.title}</h1>
//             <small>Director: {movie.director}</small>
//             <p>Metascore: {movie.metascore}</p>
//           </div>
//         )
//       })} 
//     </div>
//   )
// }

