function getTextElementById(text){
    const element = document.getElementById(text);
    const num = parseFloat(element.innerText);
    return num;
}
function getInputElementById(text){
    const element = document.getElementById(text);
    const num = parseFloat(element.value);
    element.value = '';
    return num;
}
function setTextElementById(text, num){
    const element = document.getElementById(text);
    if(isNaN(num)){
        alert("Please Enter a valid number");
        return;
    }
    element.innerText = num;
}