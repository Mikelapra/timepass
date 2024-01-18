const express = require('express');
const router = express.Router(); 

router.get('/endroute', (req, res) => {
  res.send(
    `<h1>RUTA FINAL</h1> <p>¡Bienvendio a la ruta final!</p>`
  );
});

router.use((req, res) => {
    res
      .status(400)
      .send(`<h1>página no encontrada</h1><a href="/">home</a>`);
  });

module.exports = router