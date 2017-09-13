module.exports = (req, res, next) => {
  //if user not logged in
  if (!req.user) {
    //unauthorized
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};
