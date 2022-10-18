const Router = require("koa-router");

const books = new Router();
const bookCtrl = require("./book.controller");

books.get("/", bookCtrl.list);
books.get("/:id", bookCtrl.get);
books.post("/", bookCtrl.create);
books.delete("/:id", bookCtrl.delete);
books.put("/:id", bookCtrl.replace);
books.patch("/:id", bookCtrl.update);

module.exports = books;
