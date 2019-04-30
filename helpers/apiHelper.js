"use strict";




module.exports = function(options) {


    function treeUpdateHelper(skill, skillTree) {
        if (skill.value > 0 && skill.parents.length > 0)
            for (let i = 0; i < skill.parents.length; i++) {
                if (typeof skillTree[skill.parents[i].tid] !== 'undefined' && typeof skillTree[skill.parents[i].tid].abilities[skill.parents[i].id] !== 'undefined') {
                    skillTree[skill.parents[i].tid].abilities[skill.parents[i].id].value = skill.value;
                    treeUpdateHelper(skillTree[skill.parents[i].tid].abilities[skill.parents[i].id], skillTree);
                }
            }
    }
    function treeUpdate(tid, skillTree) {
        //console.log("here");
        if (typeof skillTree[tid] !== 'undefined' && typeof skillTree[tid].abilities !== 'undefined' && typeof skillTree[tid].abilities !== null) {
            for (let i = 0; i < skillTree[tid].abilities.length; i++) {
                if (typeof skillTree[tid].abilities[i] !== 'undefined') {
                   treeUpdateHelper(skillTree[tid].abilities[i], skillTree);
                }
            }
        }
    
    
    }

    
    function skilltreeLoader(params, callback){
        //console.log("Skill Tree Loader")
        let skillTree = [];
        //grabs empty tree object. 
        options.skillLookup.find().then(function(found){
            //console.log("made the lookup");
            //console.log("Before Map" + found);
            //found = found.map(o => o.toObject());
            //console.log("After Map" + found);
        
        for(let i = 0; i < found.length; i++)
        {
        skillTree[i] = found[i].abilities;
        }
        //console.log("Skill comparison Test" + skillTree[0][0]);
    
        //Applies params to basic tree object.
        for(let i = 0; i < params.length; i++){
            skillTree[params[i].tid][params[i].id].value = 1;
            //treeUpdate(params[i].tid, skillTree);
        }
        //console.log(skillTree);
        //console.log("last Skill Tree In Loop");
        callback(skillTree);
        });
        
    }
    
    //Recursively calculates out the seperation given the number of nodes 
    function seperationDistanceHelper(tid, id, master, slave, tested){
        let seperation = 0;
        //console.log("master");
        //console.log(master);
        //console.log("Master 0");
        //console.log(master[0]);
        //console.log("Master 0 0");
        //console.log(master[0][0].id);
        //console.log("Seperation" + seperation)
        if (typeof master[tid][id].parents !== 'undefined' && master[tid][id].parents.length) {
            for (let indexParents = 0; indexParents < master[tid][id].abilities.parents.length; indexParents++) {
                if (0 > tested.findIndex(x => x.tid === master[tid][id].abilities.parents[indexParents].tid && x.id === master[tid][id].abilities.parents[indexParents].id)) {
                    tested.push(master[tid][id].abilities.parents[indexParents]);
                    seperation += seperationDistanceHelper(master[tid][id].abilities.parents[indexParents].tid, master[tid][id].abilities.parents[indexParents].id, master, slave, tested);
                }
            }
    
        }
    
        if (master[tid][id].value > slave[tid][id].value && master[tid][id].id == slave[tid][id].id) {
            console.log("Seperation Increase");
            return seperation+1;
        }
    
        else {
            console.log("no change");
            return seperation;
    
        }
    
    
    }
    
    function seperationDistance(baseNodes, master, slave) {
        let tested = baseNodes;
        let seperation = 0;
        //console.log("BaseNodes" + baseNodes);
        //console.log("Master" + master);
        //console.log("Slave" + slave);
        //console.log("seperation Distance");
        for (let i = 0; i < baseNodes.length; i++) {
            seperation += seperationDistanceHelper(baseNodes[i].tid, baseNodes[i].id, master, slave, tested);
        }
        console.log("Max Seperation" + seperation);
    
        return {distance: seperation, nodes: tested.length};
    }

    function treeify(treeObject)
    {
        for(let i = 0; i < treeObject.length; i++)
        {
        treeObject[i] = treeObject[i].abilities;
        }

        return treeObject;

    }
    
    
    /*     Accounts [{aid: String, skilltree: []}]
    params [{tid:treelocation, id: ability location}]
    seperation finders goes through the list of supplied accounts and returns the list of accounts and their distance from a list of nodes
    returns [{aid: string, distance: number, nodes: number}]
    aid: user account ID
    distance total seperation
    nodes is number of nodes tested;
    
    */
    function seperationFinders(accounts, params, callback){
        let returnArray = [];
        for (let i = 0; i < accounts.length; i++)
        {
        //console.log("Check the Dam Params" + params);
        //console.log("Accounts Skill Tree"+ accounts[0]);

        //console.log("Normal");
        //console.log(accounts[i].skilltree);
        //console.log("Treeify");
        let slave = treeify(accounts[i].skilltree);
        //console.log(slave[0]);
        //console.log(slave[0][1]);

        //console.log("skilltreeLoader");
        skilltreeLoader(params, function(master) {
           let returned = seperationDistance(params, master,slave);
           returnArray.push({id: accounts[i].aid, distance: returned.distance, nodes: returned.nodes});
           //console.log(returnArray);
           if((i+1) >= accounts.length)
           {   
               console.log("Returning array");
               callback(returnArray);
           }   
        });


        //let master =  skilltreeLoader(params);
        //console.log("Master + " + master);

        //let returned = seperationDistance(params, master,treeify(accounts[i].skilltree));
        //returnArray.push({aid: accounts[i].aid, distance: returned.distance, nodes: returned.nodes});
        }
        console.log("Returned Array" + returnArray);
            
        }
    

    return {
/*     Takes in the minimum values to a skill tree and applies the values as necessary
    filling out the template tree for comparison.
    @params [{tid:treelocation, id: ability location}]
    @return 
    */
    //creates a skill tree and fills the values with the values in params. 

    //updates tree for later construction


     treeUpdateHelper: treeUpdateHelper,
    
     treeify: treeify,

    treeUpdate: treeUpdate,
    
    skilltreeLoader:skilltreeLoader,

    seperationDistanceHelper: seperationDistanceHelper,
    
    seperationDistance: seperationDistance,

    seperationFinders: seperationFinders,




};
};
