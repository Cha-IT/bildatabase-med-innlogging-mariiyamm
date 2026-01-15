const express = require('express')
const seession = require('express-session');

function kreverInnlogging(req, res, next) {
    if(!req.session || !req.session.bruker) {
        return res.status(401).json({message: "Du må"})
    }
    next();
}

module.exports = kreverInnlogging;