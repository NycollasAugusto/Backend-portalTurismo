const express = require('express');
const router = express.Router();
const contact = require('../controller/contactController');
router.post('/', contact.createContact );
   
router.get('/',contact.listContact);
    
  module.exports = router;
