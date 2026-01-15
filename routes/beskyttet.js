const express = require('express');
const router = express.Router()
const db = require('../db.js');
const kreverInnlogging = require('../auth.js')
const bcrypt = require('bcrypt')

router.get("/", kreverInnlogging, (req, res) => {
    res.send(`
        <h3>Velkommen, ${req.session.bruker.fornavn}! Dette er en beskyttet side.</h3>
        <button onclick ="loggut()">Logg Ut</button>
        <script src="/javascripts/logutHandler.js"></script>
    `);
});

module.exports = router;
