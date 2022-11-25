const express = require('express');
let router = express.Router();
const Controller = require('../controllers/sponsors.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .get(Controller.get)
    .post([
        body('nome').isString(),
        body('nacionalidade').isString(),
        body('empresa').isString()
    ], Controller.create);

router.route('/:id')
    .get([param("id").isMongoId()], Controller.getOne)
    .put([param("id").isMongoId()], Controller.update)
    .delete([param("id").isMongoId()], Controller.delete);
//AuthController.checkAuth, 
module.exports = router;