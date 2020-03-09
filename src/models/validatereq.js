const express = require("express");
const Joi = require("@hapi/joi");

const validateUserRegister = (data) => {
    const schema = Joi.object({
        firstname: Joi.string().min(3).max(50).required(),
        lastname: Joi.string().min(3).max(50).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(8).max(1024).required(),
    });

    return schema.validate(data);
}

const validateUserLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(8).max(1024).required(),
    });

    return schema.validate(data);
}

module.exports = {
    validateUserLogin,
    validateUserRegister
};