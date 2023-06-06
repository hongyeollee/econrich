const boxofficeService = require('../services/boxoffice.service');
const { catchAsync } = require('../utils/error');

const getMovieBoxoffice = catchAsync(async (req, res) => {
  const { yyyymmdd } = req.query;
  if (!yyyymmdd) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }
  const data = await boxofficeService.getMovieBoxoffice(yyyymmdd);
  return res.status(200).json({ data });
});

module.exports = { getMovieBoxoffice };
