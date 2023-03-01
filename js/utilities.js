function getInputValueByID(inputID) {
    const inputField = document.getElementById(inputID);
    const inputFieldString = inputField.value;
    const inputFieldFloat = parseFloat(inputFieldString);
    inputField.value = "";
    return inputFieldFloat;
}

function getTextValueByID(textID) {
    const textField = document.getElementById(textID);
    const textFieldString = textField.innerText;
    const textFieldFloat = parseFloat(textFieldString);
    return textFieldFloat;
}

function setTextValueByID(oldTextID, newText) {
    const textField = document.getElementById(oldTextID);
    textField.innerText = newText;
}