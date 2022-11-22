const HTTP_BAD_REQUEST_STATUS = 400;
const HTTP_UNPROCESSABLE_STATUS = 422;

const validateNameProduct = (req, res, next) => {
  const { name } = req.body;

  if (name === undefined) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: '"name" is required' });
  }

  if (name.length < 5) {
    return res.status(HTTP_UNPROCESSABLE_STATUS)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

module.exports = validateNameProduct;