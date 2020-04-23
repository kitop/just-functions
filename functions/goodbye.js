exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      "X-Example": "1"
    },
    body: "The other function is a liar, it's not alone. I am here too."
  });
};
