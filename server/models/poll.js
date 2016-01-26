var mongoose = require('mongoose');

var pollSchema = new mongoose.Schema({
	name: {type: String, required: true},
	created_at: {type: Date, default: Date.now},
	question: {type: String, required: true},
	option1: {type: String, required: true},
	option2: {type: String, required: true},
	option3: {type: String, required: true},
	option4: {type: String, required: true},
	option1Votes: {type: Number, default: 0},
	option2Votes: {type: Number, default: 0},
	option3Votes: {type: Number, default: 0},
	option4Votes: {type: Number, default: 0},
});

var Poll = mongoose.model('Poll', pollSchema);