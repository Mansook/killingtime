const Router = require("koa-router");

const papago = new Router();
const papagoCtrl = require("./papago.controller");

papago.get("/translate", papagoCtrl.translate);

module.exports = papago;
