const client_id = "31u58ZHhOOgdX3CknBJN";
const client_secret = "NeXWy5n7TQ";
const axios = require("axios");

exports.translate = async (ctx) => {
  const api_url = "https://openapi.naver.com/v1/papago/n2mt";
  const { english } = ctx.request.body;
  const options = {
    url: api_url,
    form: { source: "ko", target: "en", text: english },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  try {
    await axios(options).then((response) => (ctx.body = response.body));
  } catch (e) {
    return ctx.throw(500, e);
  }
};

/* app.get('/translate', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
   var request = require('request');
   var options = {
       url: api_url,
       form: {'source':'ko', 'target':'en', 'text':query},
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.post(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/translate app listening on port 3000!');
 });*/
