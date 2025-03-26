var express = require('express');
const Signature = require('../models/Signature');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  const sigs = await Signature.findAll();
  // if (req.query.msg) {
  //   console.log(req.query.msg);
  //   res.locals.msg = req.query.msg;
  // }
  res.render('index', { sigs });
});

router.post('/signature', async function (req, res, next) {
  const { name, email, city, state } = req.body;
  try {
    const sig = await Signature.create({ name, email, city, state });
    res.status(201).json(sig);
    // res.redirect('/signature?msg=success&email=' + email);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
    // res.redirect('/signature?msg=' + new URLSearchParams(error.message).toString() + 'error&email=' + req.body.email);
  }
});

module.exports = router;
