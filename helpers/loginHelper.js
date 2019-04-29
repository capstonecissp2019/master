module.exports = function(options) {

    const bcrypt = require('bcryptjs');
    return {


        userChecker: function(req, res, next) {
            req.session.save();
            if (req.session && req.session.data && req.session.data.access) {
                next();
            }
            else
                res.redirect('/login');

        },
        getlogin: function(req, res) {
            res.render("login");
        },

        getNewLogin: function(req, res) {
            res.render("newlogin");
        },

        tester: function(req, res) {
            new options.skillLookup({
                pid: 22,
		        name: "ddd",
		        abilities: [
			{
				id: 0,
				name: "Primitive Data Types",
				value: 0,
				parents: []
			}
		]

            }).save().then(function(saved){
                console.log(saved);
                options.skillLookup.find({pid:22}).then(function(found){
                    console.log("found" + found);
                });
    
            });


            res.render('home');
        },
        

        postNewLogin: function(req, res) {


            const newlogin = Object.assign({}, req.body);


            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newlogin.password, salt, function(err, hash) {
                    console.log ("Making new account");
                    console.log(newlogin);
                    console.log(salt);
                    console.log(hash);

                    new options.Login({
                        password:hash,
                        Status: true,
                        timeTillNextLogin: new Date(),
                        lastSignedOn: new Date(),
                        screenName: newlogin.screenName,
                        email: newlogin.email,
                        createdOn: new Date(),
                        birthday: newlogin.birthday,
                    }).save().then(function(savedLogin) { 
                        new options.Skill({
                            aid: savedLogin.id,
                            skilltree: [],
                        }).save();
                    });
                    res.redirect('/login');



                });
            });
        },

        postLogin: function(req, res) {
            // Checks if Body exists, username field exists, then attempts to attribute a match then compares the length to the known accepted
            if (req.body && req.body.email) {
                const newlogin = Object.assign({}, req.body);
                console.log(req.body);


                options.Login.find({ email: newlogin.email }).then(function(foundUser) {
                    console.log(newlogin);
                    console.log(foundUser);

                    bcrypt.compare(newlogin.password, foundUser[0].password, function(err, isEqual) {
                        console.log(isEqual);
                        if (isEqual) {
                            console.log(foundUser[0].id);

                          options.Skill.find({ aid: foundUser[0].id }).then(function(foundSkills) {
                              console.log(foundSkills);

                            req.session.data = {
                                account: foundUser[0],
                                skill: foundSkills[0],
                                access: true
                            };
                            console.log("logged In User");
                            res.redirect('/dashboard');
                        });
                        }
                        else {
                            res.render('login');
                        }
                    });
                }).catch(function(err) {
                    console.log(err);
                    res.render("login", {
                        msg: "Error while processing request please try again"
                    });
                });
            }
            else {
                res.render("home");
            }


        }










    };
};
