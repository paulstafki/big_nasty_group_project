var staffName = require('./staffgenerator');
var staffSkillset = require('./skillsetgenerator');

var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var newStaff = function() {
    console.log("Call successful");
    return staffName;
    //return staffSkillset;
    //var scrumPoints =  randomNumber(1, 9);
};

module.exports = newStaff;
