const Joi = require("joi");
const {
  Types: { ObjectId },
} = require("mongoose");

const Book = require("models/list");

exports.create = async (ctx) => {
  const { title, publishedDate, comment } = ctx.request.body;
  const book = new Book({ title, publishedDate, comment });

  try {
    await book.save();
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = book;
};

exports.list = async (ctx) => {
  let books;
  try {
    books = await Book.find().exec();
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = books;
};
exports.get = async (ctx) => {
  const { id } = ctx.params;
  try {
    book = await Book.findById(id).exec();
  } catch (e) {
    return ctx.throw(500, e);
  }
  if (!book) {
    ctx.status = 404;
    ctx.body = { message: "없는 단어장입니다" };
    return;
  }
  ctx.body = book;
};
exports.delete = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Book.findByIdAndRemove(id).exec();
  } catch (e) {
    if (e.name == "CastError") {
      ctx.status = 404;
      return;
    }
  }
  ctx.status = 204;
};

exports.update = async (ctx) => {
  const { id } = ctx.params; // URL 파라미터에서 id 값을 읽어옵니다.

  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }

  let book;

  try {
    book = await Book.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    });
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = book;
};

exports.replace = (ctx) => {};
