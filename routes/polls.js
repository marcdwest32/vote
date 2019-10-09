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
router.put('/:id', auth, async (req, res) => {
	const { vote } = req.body;

	// get current poll results

	try {
		let poll = await Poll.findById(req.params.id);

		if (!poll) return res.status(404).json({ msg: 'Poll Not Found' });

		if (vote === '1') {
			poll = await Poll.findByIdAndUpdate(
				req.params.id,
				{ $inc: { option1votes: 1 } },
				{ new: true }
			);
			res.status(200).send('Vote Counted!');
		}
		if (vote === '2') {
			poll = await Poll.findByIdAndUpdate(
				req.params.id,
				{ $inc: { option2votes: 1 } },
				{ new: true }
			);
			res.status(200).send('Vote Counted!');
		}
		if (vote === '3') {
			poll = await Poll.findByIdAndUpdate(
				req.params.id,
				{ $inc: { option3votes: 1 } },
				{ new: true }
			);
			res.status(200).send('Vote Counted!');
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route DELETE api/polls/:id
// @desc Delete poll
// @access Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let poll = await Poll.findById(req.params.id);

		if (!poll) return res.status(404).json({ msg: 'Poll Not Found' });

		// Verify user owns poll
		if (poll.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'Not Authorized' });
		}

		await Poll.findByIdAndDelete(req.params.id);

		res.json({ msg: 'Poll Deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
