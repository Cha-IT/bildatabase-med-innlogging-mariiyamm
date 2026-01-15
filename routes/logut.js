const express = require('express');
const router = express.Router();

//sletter session med POST
router.post('/', (req, res) => {
    req.session.destroy();
    res.json({ message : "Du er logget ut"})
});

module.exports = router;