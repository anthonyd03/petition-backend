// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//     res.send("API is working");
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const sigApiRouter = require('./signaturesApi');

router.use("/signatures", sigApiRouter);

router.get("/", (req, res) => {
    res.send("API is working");
  }
  );

module.exports = router;