const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schemas.addContactSchema), ctrl.addContact);

router.put(
  "/:id",
  validateBody(schemas.updateContactSchema),
  ctrl.updateContact
);

router.delete("/:id", ctrl.removeContact);

module.exports = router;
