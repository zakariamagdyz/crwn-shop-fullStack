module.exports = (fn) => (req, res, next) => fn(req, res, next).then(next);
