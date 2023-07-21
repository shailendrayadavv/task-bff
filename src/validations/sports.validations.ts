import Joi from "joi";

export const sportsSchema = Joi.object({
  season: Joi.string().required(),
  page: Joi.number().optional(),
});
