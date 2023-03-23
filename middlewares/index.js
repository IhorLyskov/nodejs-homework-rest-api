const validateBody = require("./validateBody");
const isDummyBody = require("./isDummyBody");
const isDummyBodyFavorite = require("./isDummyBodyFavorite");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  validateBody,
  isDummyBody,
  isDummyBodyFavorite,
  isValidId,
  authenticate,
  upload,
};
