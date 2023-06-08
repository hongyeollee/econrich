const axios = require('axios');

const getMovieBoxoffice = async (yyyymmdd) => {
  const response = await axios.get(
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
    {
      params: {
        key: process.env.MOVIE_KEY,
        targetDt: yyyymmdd,
      },
    }
  );
  const data = response.data.boxOfficeResult;

  return {
    subject: data.boxofficeType,
    date: data.showRange,
    movieRankAndName: data.dailyBoxOfficeList.map((movie) => ({
      rank: movie.rank,
      movieNm: movie.movieNm,
    })),
  };
};
module.exports = { getMovieBoxoffice };
