const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');
const Poll = require('../models/Polls');

// @route GET api/polls
// @desc Get all user polls
// @access Private
router.get('/', auth, async (req, res) => {
	try {
		const polls = await Poll.find({ user: req.user.id }).sort({ date: -1 });
		res.json(polls);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route POST api/polls
// @desc Add new poll
// @access Private
router.post(
	'/',
	[
		auth,
		[
			check('question', 'Poll Question is Required')
				.not()
				.isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { question, option1, option2, option3 } = req.body;

		try {
			const newPoll = new Poll({
				question,
				option1,
				option2,
				option3,
				user: req.user.id,
			});
			const poll = await newPoll.save();
			res.json(poll);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

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
