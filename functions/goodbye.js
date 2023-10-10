exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      "X-Example": "1"
    },
    body: "Goodbye, I'm just another function."
  });
};
