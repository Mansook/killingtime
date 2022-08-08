const Router = require("koa-router");

const papago = new Router();
const papagoCtrl = require("./papago.controller");

papago.get("/translate", papagoCtrl.get);

module.exports = papago;
