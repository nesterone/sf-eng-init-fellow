//Your code here
/*
function fileListCreator(listOfFiles) {
    var fileList = document.getElementById("filelist");
    for (var i = 1; i < listOfFiles.length; i++) {
        var option = document.createElement("option");
        var optionContent = document.createTextNode(listOfFiles[i]);
        option.appendChild(optionContent);
        fileList.appendChild(option);
    }
}
function fileListContent() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://localhost:8000/", true);
    req.addEventListener("load", function () {
        if (req.status < 400) {
            var list = req.responseText.split("\n");
            fileListCreator(list);
        }
    });
    req.send(null);
}

var select = document.querySelector("select");
select.addEventListener("change", function () {
    for (var i = 0; i < select.options.length; i++) {
        var option = select.options[i];
        if (option.selected) {
            var fileName = option.value;
            fileContent(fileName);
        }
    }
});

function fileContent(fileName) {
    var req = new XMLHttpRequest();
    req.open("GET", "http://localhost:8000/" + fileName, true);
    req.addEventListener("load", function () {
        if (req.status < 400) {
            var file = document.getElementById("file");
            file.value = req.response;
        }
    });
    req.send(null);
}


fileListContent();*/

var data = "111111";
var req = new XMLHttpRequest();
req.open("PUT", "http://localhost:8000/text.txt", true);
req.responseType = 'text/plain';
req.send(data);