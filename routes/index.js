const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
  res.send(
    `<h1>Bienvenido</h1> <p>${req.dateType}</p><button name="button"><a href="/endroute">Entrar<a></button>`
  );
});


router.use((req, res) => {
    res
      .status(400)
      .send(`<h1>página no encontrada</h1><a href="/">home</a>`);
  });

module.exports = router