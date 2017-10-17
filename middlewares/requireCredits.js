module.exports = (req, res, next) => {
  //if user not logged in
  if (req.user.credits < 1) {
    //unauthorized
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  next();
};
