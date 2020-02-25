if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

var sendBtn = document.getElementById("share-btn");
var textArea = document.getElementById("share-input");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return textArea.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(textArea.value));
    ul.appendChild(li);

    textArea.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

sendBtn.addEventListener("click", addListAfterClick);