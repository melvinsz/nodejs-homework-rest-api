const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const Joi = require("joi");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },
});

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 8 digits.` })
    .required(),
  favorite: Joi.boolean(),
});

const updateFavoriteShcema = Joi.object({ favorite: Joi.boolean().required() });

const schemas = { addSchema, updateFavoriteShcema };

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };
