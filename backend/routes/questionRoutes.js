const express = require('express');
const { tooglePinQuestion, updateQuestionNote, addQuestionsToSession } = require('../controllers/questionsController');
const { protect } = require('../middlewares/authMiddleware');


const router = express.Router();

router.post('/add', protect, addQuestionsToSession);
router.post('/:id/pin', protect, tooglePinQuestion);
router.post('/:id/note', protect, updateQuestionNote);

module.exports = router;