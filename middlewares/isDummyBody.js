const { HttpError } = require("../helpers");

const isDummyBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    next(HttpError(400, "missing fields"));
  }
  next();
};

module.exports = isDummyBody;
