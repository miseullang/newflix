import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieHome from "../components/MovieHome";
import Detail from "../components/Detail";
import {getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getTrendingMovies, getTrendingTV, getUpcomingMovies } from '../utils/utils';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={
      <>
        <MovieHome title="현재 상영중인 영화" apiCall={getNowPlayingMovies} />
        <MovieHome title="인기 영화" apiCall={getPopularMovies} />
        <MovieHome title="영화 순위" apiCall={getTopRatedMovies} />
        <MovieHome title="개봉 예정" apiCall={getUpcomingMovies} />
        <MovieHome title="한국 일간 영화" apiCall={getTrendingMovies} />
        <MovieHome title="방영중인 TV 프로그램" apiCall={getTrendingTV} />
      </>
    } />
    <Route path="/detail/:id" element={<Detail />} />
  </Routes>
);

export default AppRouter;