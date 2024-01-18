const dateMiddleware = (req, res, next) => {
    const now = new Date();
    const formattedTime = `${ponerCero(now.getHours())} :  ${ponerCero(now.getMinutes())} : ${ponerCero(now.getSeconds())}`;
    req.dateType = `La era actual es ${formattedTime}`;
    next();
  };
  const ponerCero = numero => {
    return numero <10 
        ? "0" + numero 
        : numero
}
  module.exports = dateMiddleware;