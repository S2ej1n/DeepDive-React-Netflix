import axios from '../../api/axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce';
import "./SearchPage.css";

export default function SearchPage() {

  const [searchResult, setSearchResult] = useState([]);

  // console.log('location',useLocation());
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("q"); //q로
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  // console.log('searchTerm',searchTerm);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async(searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      )
      console.log(request);
      setSearchResult(request.data.results);
    }catch (error){
      console.error("error", error);
    }
  }

  // 사진 들고오는 부분
  const renderSearchResult = () => {
    return searchResult.length > 0 ? (
      <section className="search-container">
        {searchResult.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = 
           "http://image.tmdb.org/t/p/w500" + movie.backdrop_path
           return (
            <div className='movie' key={movie.id}>
              <div
              className="movie__column-poster">
                <img
                src={movieImageUrl}
                alt="movie image"
                className="movie__poster">
                </img>
              </div>
            </div>
           )
         }
        })}
      </section>
    ) : (
    <section className='no-results'>
      <div className='no-result__text'>
        <p>
          찾고자 하는 검색어 "{debouncedSearchTerm}"에 맞는 영화가 없습니다.
        </p>
      </div>
    </section>
    )
  };

  return renderSearchResult();
}
