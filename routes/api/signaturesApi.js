const express = require('express');
const router = express.Router();
const Signature = require('../../models/Signature');

// // GET /api/signatures - return all signatures as JSON
// router.get('/', async (req, res) => {
//   try {
//     const signatures = await Signature.findAll({ order: [['createdAt', 'DESC']] });
//     res.json(signatures);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch signatures' });
//   }
// });

// // POST /api/signatures - create a new signature
// router.post('/', async (req, res) => {
//   try {
//     const { name, message } = req.body;
//     if (!name || !message) {
//       return res.status(400).json({ error: 'Name and message are required' });
//     }
//     const newSignature = await Signature.create({ name, message });
//     res.status(201).json(newSignature);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to save signature' });
//   }
// });

// module.exports = router;

router.get("/", async (req, res) => {
  // res.send("Signatures API is working");
  try {
    const sigs = await Signature.findAll();
    //res.render('index', { sigs });
    res.json(sigs);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({error: 'Failed to fetch signatures'});
  }
}
);

module.exports = router;