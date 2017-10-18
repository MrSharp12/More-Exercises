//STAR WARS DICE ROLLER
/*

User will select the number of dice from a drop down, creating a dice pool
User will select a roll dice button to activate dice pool roll
Results will be stored in a variable
Numeric results will be turned into corresponding SW text value
Converted results stored in a variable
Alert results to screen (work on css part later)

var finalResult = {
        boostRollResult: swDieArray(boostDiePool, boostDieConvert()),
        setbackRollResult: swDieArray(setbackDiePool, setbackDieConvert()),
        abilityRollResult: swDieArray(abilityDiePool, abilityDieConvert()),
        difficultyRollResult: swDieArray(difficultyDiePool, difficultyDieConvert()),
        proficiencyRollResult: swDieArray(proficiencyDiePool, proficiencyDieConvert()),
        challengeRollResult: swDieArray(challengeDiePool, challengeDieConvert()),
        forceRollResult: swDieArray(forceDiePool, forceDieConvert()),
};

var boostDiePool = function() {
    var total = document.getElementById('boostDice').value;
    return total;
}; 
*/
var boostDiePool = prompt('Please enter the number of dice');
var setbackDiePool;
var abilityDiePool;
var difficultyDiePool;
var proficiencyDiePool;
var challengeDiePool;
var forceDiePool;


//this function takes a number and a function to make an array consisting of SW die results
//each loop through rolls a die, adds it to the array
function swDieArray (number, fn) {
    var roll = [];
    for (var i = 0; i < number; i++) {
        roll.push(fn);
    }
    return roll;
}

console.log(swDieArray(boostDiePool, boostDieConvert()));


//CALLBACK FUNCTIONS
//all functions convert specific regular die result to a SW die result
function boostDieConvert() {
    var result = Math.floor(Math.random() * 6) + 1;
    if (result === 3) {
        return 'Success';
    } else if (result === 4) {
        return 'Success, Advantage';
    } else if (result === 5) {
        return 'Advantage, Advantage';
    } else if (result === 6) {
        return 'Advantage';
    } else {
        return;
    }
}

function setbackDieConvert() {
    var result =  Math.floor(Math.random() * 6) + 1;
    if (result === 3 || result === 4) {
        return 'Failure';
    } else if (result === 5 || result === 6) {
        return 'Disadvantage';
    } else {
        return;
    }
}

function abilityDieConvert() {
    var result = Math.floor(Math.random() * 8) + 1;
    if (result === 2 || result === 3) {
        return 'Success';
    } else if (result === 4) {
        return 'Success, Success';
    } else if (result === 5 || result === 6) {
        return 'Advantage';
    } else if (result === 7) {
        return 'Success, Advantage';
    } else if (result === 8) {
        return 'Advantage, Advantage';
    } else {
        return;
    }
}

function difficultyDieConvert() {
    var result = Math.floor(Math.random() * 8) + 1;
    if (result === 2) {
        return 'Failure';
    } else if (result === 3) {
        return 'Failure, Failure';
    } else if (result === 4 || result === 5 || result === 6) {
        return 'Disadvantage';
    } else if (result === 7) {
        return 'Disadvantage';
    } else if (result === 8) {
        return 'Failure, Disadvantage';
    }
}

function proficiencyDieConvert() {
    var result = Math.floor(Math.random() * 12) + 1;
    if (result === 2 || result === 3) {
        return 'Success';
    } else if (result === 4 || result === 5) {
        return 'Success, Success';
    } else if (result === 6) {
        return 'Advantage';
    } else if (result === 7 || result === 8 || result === 9) {
        return 'Success, Advantage';
    } else if (result === 10 || result === 11) {
        return 'Triumph';
    } else {
        return;
    }
}

function challengeDieConvert() {
    var result = Math.floor(Math.random() * 12) + 1;
    if (result === 2 || result === 3) {
        return 'Failure';
    } else if (result === 4 || result === 5) {
        return 'Failure, Failure';
    } else if (result === 6 || result === 7) {
        return 'Disadvantage';
    } else if (result === 8 || result === 9) {
        return 'Failure, Disadvantage';
    } else if (result === 10 || result === 11) {
        return 'Disadvantage, Disadvantage';
    } else if (result === 12) {
        return 'Dispair';
    } else {
        return;
    }
}

function forceDieConvert() {
    var result = Math.floor(Math.random() * 12) + 1;
    if (result === 7) {
        return 'Dark Side, Dark Side';
    } else if (result === 8 || result === 9) {
        return 'Light Side';
    } else if (result === 10 || result === 11 || result === 12) {
        return 'Light Side, Light Side';
    } else {
        return 'Dark Side';
    }
}




