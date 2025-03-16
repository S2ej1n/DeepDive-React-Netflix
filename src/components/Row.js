import React, {useEffect, useState} from 'react'
import axios from "../api/axios";
import "./Row.css";

const Row = ({isLargeRow, title, id, fetchUrl}) => {
    const [movies, setMovies] = useState([]);

    // 필요한 정보 가져오기
    useEffect(() =>{
        fetchMovieData();
    }, [fetchUrl]);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }

  return (
    <section className='row'> 
      <h2>{title}</h2>
      <div className='slider'>
        <div className="slider__arrow-left">
          <span className='arrow'>{"<"}</span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map(movie => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              loading="lazy"
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">
            {">"}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Row;
