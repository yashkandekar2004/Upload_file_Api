const express = require('express');
const multer = require('multer');
const fileService = require('../services/fileService');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), fileService.uploadFile);

module.exports = router;
