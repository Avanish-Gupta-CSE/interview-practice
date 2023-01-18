// console.log("Hello world....from 'app.js'...")

// console.log("---Prompt---")
// var username = prompt("Enter name: ")
// console.log(username)

// console.log("---alert---")
// alert("WARNING, your system is under threat......")

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text
}

function clickHandler()
{
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
        })
}

btnTranslate.addEventListener("click", clickHandler)