const express = require('express');

const createRouter = function (collection) {
  const router = express.Router();
  console.log("Making router", router);

  router.get('/', (req, res) => {
    console.log("In router /");
    res.json({'message': 'Hello Steven'});
  });
  return router;
}

module.exports = createRouter;
