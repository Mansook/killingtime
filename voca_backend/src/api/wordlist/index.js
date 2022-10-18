const Router = require("koa-router");

const words = new Router();
const wordsCtrl = require("./word.controller");

words.get("/", wordsCtrl.list);
words.post("/", wordsCtrl.create);
words.delete("/:id", wordsCtrl.delete);
words.put("/:id", wordsCtrl.replace);
words.patch("/:id", wordsCtrl.update);
//words.patch("/:id", wordsCtrl.push);

module.exports = words;
