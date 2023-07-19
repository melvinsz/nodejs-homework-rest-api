const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:contactId", isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", isValidId, validateBody(schemas.updateFavoriteShcema), ctrl.updateFavorite);

router.delete("/:contactId", isValidId, ctrl.removeContact);

module.exports = router;
