var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var rooms = new Schema({
	name: String,
});

mongoose.model("rooms", rooms)
mongoose.connect("mongodb://localhost/dbServers")