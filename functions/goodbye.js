exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "The other function is a liar, it's not alone"
  });
};
