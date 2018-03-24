var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
      {
        firstname: 'Mason', lastname: 'Smith'
      },
      {
        firstname: 'Jasper', lastname: 'Smith'
      }
  ]);
});

module.exports = router;
