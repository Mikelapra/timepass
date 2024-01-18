

const validarHora = ((req, res, next) => {
  console.log(req.dateType)
    res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`
    if(req.dateType >= "12 :  00 : 00" && req.dateType <= "20 :  00 : 00") {
      console.log("if")
      next()
    } else {
      console.log("else")
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje))  
    }
})

module.exports = validarHora;