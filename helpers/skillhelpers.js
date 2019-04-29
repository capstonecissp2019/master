module.exports = function(options) {

    return {
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


        skillLoader: function(){
            new options.skillLookup({
                pid: 0,
                name:  "Jjava Basics",
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
                    },        {
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
                    },        {
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
                        id:7,
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
            } ).save();




        },
        dashboard: function(req, res)
        {
            options.skillLookup.find().then(function(found) {
                res.render('dashboard', {user: req.session.data.account, skills: found});
            });
        },
        
        skillupdate: function(req, res)
        {
            console.log("skill update");
            options.skillLookup.find({pid:req.params.id}).then(function(found){
                res.render('skillupdate', {skill: found[0]});
            });
        },

        skillPost: function(req, res)
        {
            options.skillLookup.find({pid:req.params.id}).then(function(foundArray){
                let found = foundArray[0];
                const newObject = Object.assign({}, req.body)

                
                for(let i = 0; i < found.abilities.length; i++)
                {
                if(newObject.hasOwnProperty(found.abilities[i].id))
                {
                    found.abilities[i].value = 1;
                }
                }  
                req.session.data.skill.skilltree[found.pid] = found;
                options.Skill.findOneAndUpdate(
                   { aid: req.session.data.skill.aid }, {$set :{aid: req.session.data.skill.aid, skilltree:  req.session.data.skill.skilltree }}
                ).then(function(err, updated){
                    if (err) {
                        res.redirect('/dashboard');
                    }
                    else {
                        res.redirect('/dashboard');
                    }
                });       
            });
        }

    };
};
