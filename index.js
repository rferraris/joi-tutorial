const joi = require('@hapi/joi');

const signupSchema = joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required()
}).required();