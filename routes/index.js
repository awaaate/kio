 var app = require('express')
    var router = app.Router()
	var mongoose = require("mongoose")
	var rooms = mongoose.model("rooms")
/* GET home page. */
router.get("/",function(req, res){
	res.render("index",{title: 'kio'})
});
router.get("/room", function(req, res){
	rooms.find(function(err, rooms){
		console.log(rooms)
		res.render('rooms',{title : 'kio', rooms : rooms})
	})
})
router.get("/room/new", function(req, res){
	res.render("crear",{title: "kio"})
})
router.post("/room/new", function(req, res){
	new rooms({name: req.body.name})
	.save(function(err, rooms){
		console.log(rooms)
		res.redirect("/room/" + req.body.name)
	})

})

router.get('/room/:name', function(req, res) {
    var query = {"name": req.params.name}
    rooms.findOne(query, function(err, rooms){
  	if (!rooms) {
  		console.log("no esiste")
  		res.render("404", {title: "kio"})
  	}
  	else{
  		console.log(rooms)
	    res.render('chat',{title : 'kio', rooms : rooms, name: req.params.name})
  	}
  })
})
router.delete("/room/:name", function(req, res){
	var query = {"name": req.params.name}
	rooms.findOneAndRemove(query, function(err, rooms){
		console.log(rooms)
		res.redirect("/room")
	})
})

module.exports = router
