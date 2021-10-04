const output = document.getElementById("outputcontainer")
const inputbutton = document.getElementById("inputbutton")
const error = document.getElementById("error")
const numlist = [':zero:', ':one:', ':two:', ':three:', ':four:', ':five:', ':six:', ':seven:', ':eight:', ':nine:'];
const specialcharlist = {
    '!' : ':exclamation:', 
    '?' : ':question:'
};
const regexLetters = /^[a-zA-Z]*$/;
const regexNumbers = /^[0-9]*$/;

console.log(specialcharlist["!"], specialcharlist["?"])


function Converter() {
    const input = document.getElementById("inputfield").value.toLowerCase();
    const inputArray = input.split("");
    let finishedArray = [];
    error.innerHTML=""

    for (i = 0; i < inputArray.length; i++) {
        if (regexLetters.test(inputArray[i])){
            finishedArray.push(`:regional_indicator_${inputArray[i]}:`)
        }
        else if (regexNumbers.test(inputArray[i])) {
            finishedArray.push(numlist[inputArray[i]])
        }

        else if (specialcharlist.hasOwnProperty(inputArray[i])) {
            finishedArray.push(specialcharlist[inputArray[i]])
        }

        else if (inputArray[i] === " ") {
            finishedArray.push(`    `)
        }
        else {
            error.innerHTML = `<h6>Your text contains non-english letters or numbers. These will be ignored.</h6>`
        }
    }

    output.innerHTML = `<input type="text" value="${finishedArray.join(" ")}">`

}


