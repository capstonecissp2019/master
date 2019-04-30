


module.exports = function (options) {

    let apiHelper = require("../helpers/apiHelper")({ skillLookup: options.skillLookup, Login: options.Login, Skill: options.Skill, skillPresets: options.skillPresets });


    return {
        tester: function (req, res) {
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

            }).save().then(function (saved) {
                console.log(saved);
                options.skillLookup.find({ pid: 22 }).then(function (found) {
                    console.log("found" + found);
                });

            });


            res.render('home');
        },


        skillLoader: function () {
            new options.skillLookup({
                pid: 0,
                name: "Jjava Basics",
                abilities: [
                    {
                        id: 0,
                        name: "Primitive Data Types",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 1,
                        name: "Arrays",
                        value: 0,
                        parents: []
                    }, {
                        id: 2,
                        name: "Assignment, Arithmetic, and Unary Operators",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 3,
                        name: "Equality, Relational, and Conditional Operators",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 4,
                        name: "Bitwise and Bit Shift Operators",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 5,
                        name: "Expressions",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 6,
                        name: "Statements",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 7,
                        name: "Blocks",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 8,
                        name: "Statements",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 9,
                        name: "if-then Statement",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 10,
                        name: "if-then-else",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 99,
                        name: "More Goes DOwn the List",
                        value: 0,
                        parents: []
                    }
                ]
            }).save();

            new options.skillLookup({
                pid: 1,
                name: "Java Basic 1",
                abilities: [
                    {
                        id: 0,
                        name: "Primitive Data Types",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 1,
                        name: "Arrays",
                        value: 0,
                        parents: []
                    }, {
                        id: 2,
                        name: "Assignment, Arithmetic, and Unary Operators",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 3,
                        name: "Equality, Relational, and Conditional Operators",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 4,
                        name: "Bitwise and Bit Shift Operators",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 5,
                        name: "Expressions",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 6,
                        name: "Statements",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 7,
                        name: "Blocks",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 8,
                        name: "if-then Statement",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 9,
                        name: "if-then-else",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 10,
                        name: "switches",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 11,
                        name: "while loops",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 12,
                        name: "do-while loops",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 13,
                        name: "for loops",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 14,
                        name: "Branching statements",
                        value: 0,
                        parents: []
                    }




                ]
            }).save();

            new options.skillLookup({
                pid: 2,
                name: "Java Basic 2",
                abilities: [
                    {
                        id: 0,
                        name: "Declaring Classes",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 1,
                        name: "Declaring Member Variables",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 2,
                        name: "Defining Methods",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 3,
                        name: "Constructors, Accessors, Mutators",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 4,
                        name: "Creating Objects",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 5,
                        name: "Using Objects",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 6,
                        name: "Returning a Value from Method",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 7,
                        name: "this Keyword",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 8,
                        name: "Controlling Access to Members of Class",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 9,
                        name: "Initializing Fields",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 10,
                        name: "Nested Classes",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 11,
                        name: "Inner Classes",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 12,
                        name: "Local Classes",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 13,
                        name: "Anonymous Classes",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 14,
                        name: "Lambda Expressions",
                        value: 0,
                        parents: []
                    },
                    {
                        id: 15,
                        name: "ENUM",
                        value: 0,
                        parents: []
                    }
                ]
            }).save();




        },
        presetLoader: function () {
            new options.skillPresets({
                pid: "basicJava",
                name: "Basic Java",
                params: [
                    {
                        tid: 0,
                        id: 0,
                    },
                    {
                        tid: 0,
                        id: 1,
                    },
                    {
                        tid: 0,
                        id: 2,
                    },
                    {
                        tid: 0,
                        id: 3,
                    },
                    {
                        tid: 0,
                        id: 4,
                    },
                    {
                        tid: 0,
                        id: 5,
                    },
                    {
                        tid: 0,
                        id: 6,
                    },
                    {
                        tid: 0,
                        id: 7,
                    },
                    {
                        tid: 0,
                        id: 8,
                    },
                    {
                        tid: 0,
                        id: 9,
                    },
                    {
                        tid: 0,
                        id: 10,
                    },
                ],

            }).save();

            new options.skillPresets({
                pid: "advancedJava",
                name: "Advanced Java",
                params: [
                    {
                        tid: 0,
                        id: 0,
                    },
                    {
                        tid: 0,
                        id: 1,
                    },
                    {
                        tid: 0,
                        id: 2,
                    },
                    {
                        tid: 0,
                        id: 3,
                    },
                    {
                        tid: 0,
                        id: 4,
                    },
                    {
                        tid: 0,
                        id: 5,
                    },
                    {
                        tid: 0,
                        id: 6,
                    },
                    {
                        tid: 0,
                        id: 7,
                    },
                    {
                        tid: 0,
                        id: 8,
                    },
                    {
                        tid: 0,
                        id: 9,
                    },
                    {
                        tid: 0,
                        id: 10,
                    },
                    {
                        tid: 0,
                        id: 0,
                    },
                    {
                        tid: 1,
                        id: 1,
                    },
                    {
                        tid: 1,
                        id: 2,
                    },
                    {
                        tid: 1,
                        id: 3,
                    },
                    {
                        tid: 1,
                        id: 4,
                    },
                    {
                        tid: 1,
                        id: 5,
                    },
                    {
                        tid: 1,
                        id: 6,
                    },
                    {
                        tid: 1,
                        id: 7,
                    },
                    {
                        tid: 1,
                        id: 8,
                    },
                    {
                        tid: 1,
                        id: 9,
                    },
                    {
                        tid: 1,
                        id: 10,
                    },
                ],

            }).save();


        },

        dashboard: function (req, res) {
            options.skillLookup.find().then(function (found) {
                res.render('dashboard', { user: req.session.data.account, skills: found });
            });
        },

        skillupdate: function (req, res) {
            console.log("skill update");
            options.skillLookup.find({ pid: req.params.id }).then(function (found) {
                res.render('skillupdate', { skill: found[0] });
            });
        },

        skillPost: function (req, res) {
            options.skillLookup.find({ pid: req.params.id }).then(function (foundArray) {
                let found = foundArray[0];
                const newObject = Object.assign({}, req.body);


                for (let i = 0; i < found.abilities.length; i++) {
                    if (newObject.hasOwnProperty(found.abilities[i].id)) {
                        found.abilities[i].value = 1;
                    }
                }
                req.session.data.skill.skilltree[found.pid] = found;
                options.Skill.findOneAndUpdate(
                    { aid: req.session.data.skill.aid }, { $set: { aid: req.session.data.skill.aid, skilltree: req.session.data.skill.skilltree } }
                ).then(function (err, updated) {
                    if (err) {
                        res.redirect('/dashboard');
                    }
                    else {
                        res.redirect('/dashboard');
                    }
                });
            });
        },
        skillFinderGet: function (req, res) {


            options.skillPresets.find().then(function (presets) {
                res.render('skillfinder', { skillGroups: presets });
            });


            //web form for the ability to search through skills
        },

        skillFinderPost: function (req, res) {

            //Creates the Search Array to get skill Presents
            //console.log(req.body);
            let searchArray = [];
            if (Array.isArray(req.body.searchParams)) {
                for (let i = 0; i < req.body.searchParams.length; i++) {
                    //console.log({id: req.body.searchParams[i]});
                    searchArray.push({ pid: req.body.searchParams[i] });
                }
            }
            else {
                searchArray.push({ pid: req.body.searchParams });
            }
            //console.log(searchArray);

            //gets and merges skill presets for master
            options.skillPresets.find({ $or: searchArray }).then(function (presets) {
                //console.log(presets);
                let param = [];
                console.log(presets);
                for (let i = 0; i < presets.length; i++) {
                    for (let j = 0; j < presets[i].params.length; j++) {

                        param.push({ tid: presets[i].params[j].tid, id: presets[i].params[j].id });
                    }
                }
                console.log(param);
                options.Skill.find().then(function (users) {
                    console.log("Found Users");
                    console.log(users);
                    apiHelper.seperationFinders(users, param, function (data) {
                        let findArray = [];
                        for(let i = 0; i < data.length; i++)
                        {
                            findArray.push({_id: data[i].id});
                        }
                        console.log(data);
                          options.Login.find({ $or: findArray }).then(function (accounts) {
                              
                            console.log(data);
                            for(let i = 0; i < data.length; i++)
                              {
                                for(let j = 0; j < accounts.length; j++)
                                {
                                    console.log(data[i].id)
                                    if(accounts[j]._id ==  data[i].id)
                                    {
                                        accounts[j].distance = (1-(data[i].distance/data[i].nodes))*100;
                                    }
                                }
                              }
                            res.render('foundPerson', { accounts: accounts });
                        });
                        
                    });
                });
            });
        },

    };
};
