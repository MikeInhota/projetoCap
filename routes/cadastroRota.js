const express = require("express");

const router = express.Router();

const cadastroController = require("../controller/cadastroControler");

router.get('/', cadastroController.index);
router.get("/add/:nome", cadastroController.add);

module.exports = router;