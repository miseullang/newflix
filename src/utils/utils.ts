const API_KEY = "26bd5ca062265a79ec85ecde6562b4ab";
const BASE_URL = "https://api.themoviedb.org/3";

// 현재 상영작
export const getNowPlayingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
  );
  return response.json();
}

// 현재 상영작
export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
  );
  return response.json();
}

// 인기 순위
export const getTopRatedMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
  );
  return response.json();
}

// 인기 순위
export const getUpcomingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
  );
  return response.json();
}

// 일간 트렌딩 영화
export const getTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=ko-KR&with_origin_country=KR`
  );
  return response.json();
};

// 방영중인 TV 프로그램
export const getTrendingTV = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=ko-KR&page=1&timezone=KR`
  );
  return response.json();
};

// 컨텐츠 상세 조회
export const getMoviesDetail = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`
  );
  return response.json();
};
