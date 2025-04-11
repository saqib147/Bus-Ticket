const express = require('express');
const router = express.Router();
const { submitContact } = require('../Controllers/contactus.js');

router.post('/submit', submitContact);

module.exports = router;

