const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js')
const dateMiddleware = require('./middlewares/horaMiddleware.js')
const validarHora = require('./middlewares/validarHora.js')
const endrouteRouter = require('./routes/endroute.js')


app.use('/',dateMiddleware, indexRouter);
app.use('/endroute',validarHora, endrouteRouter);

app.listen(3000, () => {
    console.log(`El servidor está escuchando en el 3000`);
  });
  