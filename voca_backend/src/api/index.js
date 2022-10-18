const Router = require("koa-router");

const api = new Router();
const wordlist = require("./wordlist");
const booklist = require("./booklist");
const papago = require("./papago");
const test = require("./testlist");

api.use("/words", wordlist.routes());
api.use("/books", booklist.routes());
api.use("/papago", papago.routes());
api.use("/test", test.routes());
module.exports = api;
