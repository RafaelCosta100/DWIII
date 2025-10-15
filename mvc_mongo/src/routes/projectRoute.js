const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');

router.get('/', projectController.getProjects);
router.post('/', projectController.create);
router.get('/:id', projectController.details);

module.exports = router;