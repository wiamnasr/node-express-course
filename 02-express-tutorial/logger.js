// req => middleware => res

// Middleware function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // unless I'm sending back the response in the middleware, I need to invoke next()
  // res.send('Testing');
  next();
};

module.exports = logger;
