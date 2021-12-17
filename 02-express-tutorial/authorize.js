// Authorized Middleware
const authorize = (req, res, next) => {
  // looking for specific query string
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  }
  //   response if the user doesn't provide a key of user and a value of 'john'
  else {
    //   401 STATUS is for UNAUTHORIZED
    res.status(401).send("UNAUTHORIZED");
  }
};

module.exports = authorize;
