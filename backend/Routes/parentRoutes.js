const express = require('express');
const {postParent, postChild} = require('../Controllers/parentController');
const parentRoutes = express.Router();

// parentRoutes.post('/Parent/', parentController.createParentWithChild);
parentRoutes.post('/Parent/', postParent);
parentRoutes.post('/child/', postChild);


module.exports = parentRoutes;
