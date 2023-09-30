const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const fetchData = require('../middleware/getData');

router.get('/blog-stats', fetchData, dataController.analyzeData);
router.get('/blog-search', fetchData, dataController.searchBlog);

module.exports = router;