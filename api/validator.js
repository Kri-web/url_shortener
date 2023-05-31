import Joi from 'joi';

export const urlValidation = async (req, res, next) => {
    // Define the Joi schema to validate the 'originalUrl' field
    const schema = Joi.object({
        originalUrl: Joi.string().required(),
    }).options({ stripUnknown: true });
    req.body = await schema.validateAsync(req.body);
    return next();
};
