const express = require('express');
const bodyParser = require("body-parser");
const credentials = require("./credentials.js");

let app = express();

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('cookie-parser')(credentials.cookieSecret));

app.use(require("express-session")({
	resave: false,
	saveUnitialized: false,
	secret: credentials.cookieSecret,
	cookie: { secure: false }
}));

//sets up db objects
const options = { server: { socketOption: { keepAlive: 1 } } };

let mongooseLogin = require("mongoose");
let dbLogin = mongooseLogin.createConnection('mongodb://dbuser:dbpassword1@ds053140.mlab.com:53140/login', options);
let Login = require('./models/login.js')(dbLogin);

let  mongooseSkill= require("mongoose");
let dbSkill = mongooseSkill.createConnection('mongodb://dbuser:dbpassword1@ds143326.mlab.com:43326/skill', options);
let Skill = require('./models/skill.js')(dbSkill);

let mongooseSkillLookup = require("mongoose");
let dbSkillLookup = mongooseSkillLookup.createConnection('mongodb://dbuser:dbpassword1@ds037824.mlab.com:37824/user', options);
let skillLookup = require('./models/skillLookup.js')(dbSkillLookup);

let mongooseSkillPresets = require("mongoose");
let dbSkillPresets = mongooseSkillPresets.createConnection('mongodb://dbuser:dbpassword1@ds127646.mlab.com:27646/params', options);
let skillPresets = require('./models/skillPresets.js')(dbSkillPresets);

//mongodb://<dbuser>:<dbpassword>@ds127646.mlab.com:27646/params

dbLogin.on('error', console.error.bind(console, 'connection error:'));
dbLogin.once('open', function() { console.log("dbLogin connected"); });

dbSkill.on('error', console.error.bind(console, 'connection error:'));
dbSkill.once('open', function() { console.log("dbSkill connected"); });

 dbSkillLookup.on('error', console.error.bind(console, 'connection error:'));
dbSkillLookup.once('open', function() { console.log("dbSkillLookup connected");});

dbSkillPresets.on('error', console.error.bind(console, 'connection error:'));
dbSkillPresets.once('open', function() { console.log("dbskillPresets connected");});


//calls helpers
let loginHelpers = require("./helpers/loginHelper.js")({ Login: Login, Skill: Skill});
let skillHelpers = require("./helpers/skillhelpers.js")({skillLookup: skillLookup,  Login: Login, Skill: Skill, skillPresets: skillPresets});
let apiHellpers = require("./helpers/apiHelper")({skillLookup: skillLookup,  Login: Login, Skill: Skill, skillPresets: skillPresets});
// Basic Web Pages


app.get('/home', function(req, res) {
	res.render('home');
});

app.get('/contact', function(req, res) {
	res.render('contact');
});

app.get('/about', function(req, res) {
	res.render('about');
});

// Login screen should display the form
app.get('/login', loginHelpers.getlogin);
app.get('/newlogin', loginHelpers.getNewLogin);
app.post('/newlogin', loginHelpers.postNewLogin);
app.post('/login', loginHelpers.postLogin);

app.get('/dashboard', loginHelpers.userChecker, skillHelpers.dashboard ); 
app.get('/dashboard/:id/skillform', loginHelpers.userChecker, skillHelpers.skillupdate);
app.post('/dashboard/:id/skillform', loginHelpers.userChecker, skillHelpers.skillPost);



app.get('/skillfinder', loginHelpers.userChecker, skillHelpers.skillFinderGet);

app.get('/api/skillfinderform', function (req, res)
{
	//send all the data
});


app.post('/skillfinder', loginHelpers.userChecker, skillHelpers.skillFinderPost);
app.get('/api/skillfinderform', function(req,res) {
	console.log("pinged");
	console.log(req.body);

});


app.get('/person/:id', loginHelpers.userChecker, function(req, res) {
	//Displays information on the person that you have discovered
});



// 404 catch-all handler (middleware)
app.use(function(req, res, next) {
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.');
});
