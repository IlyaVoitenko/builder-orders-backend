const ctrlWrappen = (func) => {
  return async (req, res, next) => {
    try {
      return func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
