const Router = require("koa-router");

const api = new Router();
const wordlist = require("./wordlist");
const booklist = require("./booklist");
const papago = require("./papago");

api.use("/words", wordlist.routes());
api.use("/books", booklist.routes());
api.use("/papago", papago.routes());
module.exports = api;
