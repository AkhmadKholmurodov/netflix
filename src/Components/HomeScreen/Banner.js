import React, {useState, useEffect} from 'react';
import './Banner.css';
import requests from './Request';
import axios from './axios';

function Banner() {
     
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchHorrorMovies);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])

    console.log(axios.instance + movie);

    function truncate(string,n) {
        return string?.length > n? string.substr(0, n-1) + '...' :string ;
    }

  return <header className='banner' style={{
    backgroundSize: 'cover',
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
  }}
  >
      <div className="banner__contents">
          <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My list</button>
          </div>
          <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
      </div>

  <div className='banner__fadeBottom'><h1>anything</h1></div>
  </header>;
}

export default Banner;
