require("dotenv").config();

const Koa = require("koa");
const cors = require("@koa/cors");
const Router = require("koa-router");
const mongoose = require("mongoose");

const bodyParser = require("koa-bodyparser");
const app = new Koa();
app.use(bodyParser());

const router = new Router();
const api = require("./api");

mongoose.Promise = global.Promise;
const { PORT, MONGO_URI } = process.env;
console.log(MONGO_URI);
mongoose
  .connect(MONGO_URI)
  .then((response) => {
    console.log("connected to mongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

app.use(router.routes()).use(router.allowedMethods());
const port = PORT || 4000;

app.listen(port, () => {
  console.log("listening to port 4000");
});
