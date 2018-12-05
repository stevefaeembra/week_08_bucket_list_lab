const express = require('express');

const createRouter = function (collection) {
  const router = express.Router();
  console.log(",2222", router);

  router.get('/bb', (req, res) => {
    console.log(",3333");
    res.json({'message': 'Hello Steven'});
  });
  return router;
}

module.exports = createRouter;
