import React from "react";

function MovieList() {

  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];

  return (
    <ul>
      {console.log(movies)}
      {movies.map((movie, index) => (
        <li key={index} >
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

export default MovieList;