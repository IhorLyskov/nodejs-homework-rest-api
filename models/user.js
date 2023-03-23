const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const subscriptionList = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  password: Joi.string()
    .required()
    .messages({ "any.required": "missing field password" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "missing field email" }),
  subscription: Joi.string()
    .valid(...subscriptionList)
    .optional(),
});

const loginSchema = Joi.object({
  password: Joi.string()
    .required()
    .messages({ "any.required": "missing field password" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "missing field email" }),
});

const usersSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required()
    .messages({ "any.required": "missing field subscription" }),
});

const schemas = {
  registerSchema,
  loginSchema,
  usersSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
