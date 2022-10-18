const Test = require("models/test");
exports.create = async (ctx) => {
  const { data } = ctx.request.body;
  //const { english, korea, createdAt } = ctx.request.body;
  const { bookid } = ctx.params;
  const test = new Test({
    bookId: bookid,
    data: data,
  });

  try {
    await test.save();
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = test;
};
exports.allist = async (ctx) => {
  const { bookid } = ctx.params;
  let test;
  try {
    test = await Test.findByBookId(bookid).exec();
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = test;
};
exports.getTestById = async (ctx) => {
  const { id } = ctx.params;
  let test;
  try {
    test = await Test.findById(id).exec();
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = test;
};
exports.submmit = async (ctx) => {
  const { id } = ctx.params;
  let test;
  try {
    test = await Test.findByIdAndUpdate(id, ctx.request.body, { new: true });
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = test;
};
/*exports.update = async (ctx) => {
  const { id } = ctx.params; // URL 파라미터에서 id 값을 읽어옵니다.

  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }

  let book;

  try {
    book = await Word.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    });
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = book;
};
*/

/*const Joi = require("joi");

const {
  Types: { ObjectId },
} = require("mongoose");
const Word = require("models/word");

exports.create = async (ctx) => {
  const { english, korea, createdAt } = ctx.request.body;

  const word = new Word({
    english,
    korea,
    createdAt,
  });
  try {
    await word.save();
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = word;
};

exports.list = async (ctx) => {
  let books;
  try {
    books = await Word.find().exec();
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = books;
};

exports.delete = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Word.findByIdAndRemove(id).exec();
  } catch (e) {
    if (e.name === "CastError") {
      ctx.status = 404;
      return;
    }
  }
  ctx.status = 204;
};

exports.replace = (ctx) => {
  ctx.body = "replaced";
};

exports.update = async (ctx) => {
  const { id } = ctx.params; // URL 파라미터에서 id 값을 읽어옵니다.

  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }

  let book;

  try {
    book = await Word.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    });
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = book;
};
*/
