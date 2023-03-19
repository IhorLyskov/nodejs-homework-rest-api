const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  isValidId,
  validateBody,
  isDummyBody,
  isDummyBodyFavorite,
} = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getById);

router.post(
  "/",
  isDummyBody,
  validateBody(schemas.addContactSchema),
  ctrl.addContact
);

router.put(
  "/:id",
  isValidId,
  isDummyBody,
  validateBody(schemas.updateContactSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  isDummyBodyFavorite,
  validateBody(schemas.updateStatusSchema),
  ctrl.updateStatusContact
);

router.delete("/:id", isValidId, ctrl.removeContact);

module.exports = router;
