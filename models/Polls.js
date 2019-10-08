const mongoose = require('mongoose');

const PollSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	question: {
		type: String,
		required: true,
	},
	option1: {
		type: String,
		required: true,
	},
	option2: {
		type: String,
		required: true,
	},
	option3: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('poll', PollSchema);
