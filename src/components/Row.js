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
        <div className="slider__arrow-left"
          // 그냥 div 눌러도 되게 바꿔버렸슴당.ㅎㅎ
          onClick={()=>{
            // 포스터 하나하나마다 고유의 아이디가 있음.
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}>
          <span className='arrow'
          >{"<"}</span>
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
        <div className="slider__arrow-right"
          onClick={()=>{
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}>
          <span className="arrow">
            {">"}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Row;
