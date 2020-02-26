if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

window.addEventListener(
    "DOMContentLoaded",
    function() {
        var sendBtn = document.getElementById("share-btn");
        var textArea = document.getElementById("share-input");
        var ul = document.querySelector("ul");

        function inputLength() {
            return textArea.value.length;
        }

        function createListElement() {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(textArea.value));
            ul.insertBefore(li, ul.firstChild);

            textArea.value = "";
        }

        function addListAfterClick() {
            if (inputLength() > 0) {
                createListElement();
            }
        }

        sendBtn.addEventListener("click", addListAfterClick);
    },
    false
);