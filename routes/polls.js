const express = require('express');
const router = express.Router();

// @route GET api/polls
// @desc Get all user polls
// @access Private
router.get('/', (req, res) => {
	res.send('Get user polls');
});

// @route POST api/polls
// @desc Add new poll
// @access Private
router.post('/', (req, res) => {
	res.send('Add poll');
});

// @route PUT api/polls/:id
// @desc Update poll
// @access Private
router.put('/:id', (req, res) => {
	res.send('Update poll');
});

// @route DELETE api/polls/:id
// @desc Delete poll
// @access Private
router.put('/:id', (req, res) => {
	res.send('Delete poll');
});

module.exports = router;
