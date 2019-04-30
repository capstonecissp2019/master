module.exports = function(options) {

    return {
/*     Takes in the minimum values to a skill tree and applies the values as necessary
    filling out the template tree for comparison.
    @params [{tid:treelocation, id: ability location}]
    @return 
    */

    skilltreeLoader: function(params){
        let skillTree = [];
        console.log(params);

        //grabs empty tree object. 
        options.skillLookup.find().then(function(found){
            console.log(found);
        
            for(let i = 0; i < found.length; i++)
            {
                skillTree[found[i].pid] = found[i];
            }
            console.log(skillTree[0]);
            console.log(skillTree[0].abilities[0]);

        //Applies params to basic tree object.
        for(let i = 0; i < params.length; i++){
            skillTree[params[i].tid].abilities[params[i].id].value = 1;
            this.treeUpdate(params[i].tid, skillTree);
        }
        console.log(skillTree[0].abilities);


        return skillTree;
        });
    },


     treeUpdate: function(tid, skillTree) {
        if (typeof skillTree[tid] !== 'undefined' && typeof skillTree[tid].abilities !== 'undefined' && typeof skillTree[tid].abilities !== 'null') {
            for (let i = 0; i < skillTree[tid].abilities.length; i++) {
                if (typeof skillTree[tid].abilities[i] !== 'undefined') {
                    treeUpdateHelper(skillTree[tid].abilities[i], skillTree);
                }
            }
        }
    
    
    },


     treeUpdateHelper: function(skill, skillTree) {
        if (skill.value > 0 && skill.parents.length > 0)
            for (let i = 0; i < skill.parents.length; i++) {
                if (typeof skillTree[skill.parents[i].tid] !== 'undefined' && typeof skillTree[skill.parents[i].tid].abilities[skill.parents[i].id] !== 'undefined') {
                    skillTree[skill.parents[i].tid].abilities[skill.parents[i].id].value = skill.value;
                    treeUpdateHelper(skillTree[skill.parents[i].tid].abilities[skill.parents[i].id], skillTree);
                }
            }
    },
    //Recursively calculates out the seperation given the number of nodes 
    seperationDistanceHelper: function(tid, id, master, slave, tested){
        let seperation = 0;
        if (typeof master[tid].abilities[id].parents !== 'undefined' && master[tid].abilities[id].parents.length) {
            for (let indexParents = 0; indexParents < master[tid].abilities[id].parents.length; indexParents++) {
                if (0 > tested.findIndex(x => x.tid === master[tid].abilities[id].parents[indexParents].tid && x.id === master[tid].abilities[id].parents[indexParents].id)) {
                    tested.push(master[tid].abilities[id].parents[indexParents]);
                    seperation += seperationDistanceHelper(master[tid].abilities[id].parents[indexParents].tid, master[tid].abilities[id].parents[indexParents].id, master, slave, tested)
                }
            }
    
        }
    
        if (master[tid].abilities[id].value > slave[tid].abilities[id].value && master[tid].abilities[id].id == slave[tid].abilities[id].id) {
            return seperation++;
        }
    
        else {
            return seperation;
    
        }
    
    
    },

     seperationDistance: function(baseNodes, master, slave) {
        let tested = baseNodes;
        let seperation = 0;
    
        for (let i = 0; i < baseNodes.length; i++) {
            seperation += seperationDistanceHelper(baseNodes[i].tid, baseNodes[i].id, master, slave, tested);
        }
    
        return {distance: seperation, nodes: tested.length};
    },


    

    seperationFinders: function(accounts, params){
        // calculates out the seperation distance

    },





};
};
