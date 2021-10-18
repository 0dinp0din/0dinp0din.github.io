//HTML id variables //
const output = document.getElementById("outputcontainer")
const inputbutton = document.getElementById("inputbutton")
const error = document.getElementById("error")

// Dictionaries //
const numlist = [':zero:', ':one:', ':two:', ':three:', ':four:', ':five:', ':six:', ':seven:', ':eight:', ':nine:'];
const specialcharlist = {
    '!' : ':exclamation:', 
    '?' : ':question:'
};

// Character filters //
const regexLetters = /^[a-zA-Z]*$/;
const regexNumbers = /^[0-9]*$/;

// Functions //

function Converter() {
    const input = document.getElementById("inputfield").value.toLowerCase();
    let finishedArray = [];
    error.innerHTML=""

    for (i = 0; i < input.length; i++) {
        if (input[i] === " ") {
            finishedArray.push(`    `)
        }else if (specialcharlist.hasOwnProperty(input[i])) {
            finishedArray.push(specialcharlist[input[i]])
        }else if (regexNumbers.test(input[i])) {
            finishedArray.push(numlist[input[i]])
        }else if (regexLetters.test(input[i])){
            finishedArray.push(`:regional_indicator_${input[i]}:`)
        }else {
            error.innerHTML = `Your text contains non-english letters or numbers. Redundant characters will be ignored.`
        }
    }

    output.innerHTML = `<input type="textarea" id="outputtext" class="textfields" value="${finishedArray.join(" ").trim()}" readonly>`

}