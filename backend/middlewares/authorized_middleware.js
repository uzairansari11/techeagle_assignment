const authorized = (...permittedRole) => {
  return (req, res, next) => {
    if (permittedRole.includes(req.role)) {
      next();
    } else {
      res.status(401).json({
        message: `Your are not authorized because you are ${req.role}`,
      });
    }
  };
};

module.exports = { authorized };
