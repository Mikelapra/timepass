const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js')
const dateMiddleware = require('./middlewares/horaMiddleware.js')
const validarHora = require('./middlewares/validarHora.js')
const endrouteRouter = require('./routes/endroute.js')

app.use(dateMiddleware);
app.use('/', indexRouter);
app.use(validarHora)
app.use('/', endrouteRouter);


app.use((req, res) => {
  res
    .status(400)
    .send(`<h1>página no encontrada</h1><a href="/">home</a>`);
});

const PORT = 3000

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el http://localhost:${PORT}`);
  });
  


