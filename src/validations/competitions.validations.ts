import Joi from "joi";

export const competitionsSchema = Joi.object({
  sportId: Joi.number().required(),
  page: Joi.number().optional(),
  fetchAll: Joi.boolean().optional(),
  continentId: Joi.number().optional(),
});
