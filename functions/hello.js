exports.handler = function(event, context, callback) {
  console.log("Hello from inside the function")
  callback(null, {
    statusCode: 200,
    body: "Hello, I'm just a function"
  });
};
