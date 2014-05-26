var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
	name: String,
	name22: String
});

module.exports = mongoose.model('Bear2', BearSchema);