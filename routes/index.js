const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
  res.send(
    `<h1>Bienvenido</h1> <p>La hora actual es ${req.dateType}</p><button name="button"><a href="/endroute">Entrar<a></button>`
  );
});




module.exports = router