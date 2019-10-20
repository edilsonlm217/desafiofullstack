const express = require('express');

const SearchController = require('./controllers/SearchController');

const routes = express.Router();

routes.post('/search', SearchController.index);

module.exports = routes;