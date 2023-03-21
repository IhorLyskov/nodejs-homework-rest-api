const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  isValidId,
  validateBody,
  isDummyBody,
  isDummyBodyFavorite,
  authenticate,
} = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  isDummyBody,
  validateBody(schemas.addContactSchema),
  ctrl.addContact
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  isDummyBody,
  validateBody(schemas.updateContactSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  isDummyBodyFavorite,
  validateBody(schemas.updateStatusSchema),
  ctrl.updateStatusContact
);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

module.exports = router;
