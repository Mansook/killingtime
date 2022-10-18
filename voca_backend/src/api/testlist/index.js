const Router = require("koa-router");

const test = new Router();
const testCtrl = require("./test.controller");

test.get("/:bookid", testCtrl.allist);
test.get("/history/:id", testCtrl.getTestById);
test.post("/:bookid", testCtrl.create);
test.patch("/history/:id", testCtrl.submmit);
/*test.get("/:id", testCtrl.get);
test.get("/:id/:idx", testCtrl.get);
test.post("/", bookCtrl.create);
test.delete("/:id",testCtrl.delete);
test.put("/:id", bookCtrl.replace);
test.patch("/:id", bookCtrl.update);
*/
module.exports = test;
