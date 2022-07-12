require("dotenv").config();
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";

import api from "./api";
import jwtMiddleware from "./lib/jwtMiddleware";
const app = new Koa();
const router = new Router();

const { PORT, MONGO_URI } = process.env;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

router.use("/api", api.routes());
app.use(bodyParser());
app.use(jwtMiddleware);
router.get("/", (ctx) => {
  ctx.body = "홈";
});

app.use(router.routes()).use(router.allowedMethods());
const port = PORT || 4000;
app.listen(port, () => {
  console.log("listening to port 4000");
});
