const express = require('express');
const router = express.Router();
const Signature = require('../../models/Signature');

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

router.post("/", async (req, res) => {
  try {
    const { name, email, city, state } = req.body;

    // Basic validation
    if (!name || !email || !city || !state) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newSig = await Signature.create({ name, email, city, state });
    res.status(201).json(newSig);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save signature" });
  }
});


module.exports = router;