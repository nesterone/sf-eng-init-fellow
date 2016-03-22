//Your code here
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

var req = new XMLHttpRequest();
req.open("GET", "http://localhost:8000/package.json", true);
req.addEventListener("load", function () {
    if (req.status < 400) {
       console.log(req.response);
    }
});
req.send(null);










fileListContent();




/*var http = require("http");

 var request = http.request({
 hostname: "localhost",
 port: 8000,
 path: "/",
 method: "GET"
 }, function(response) {
 response.on("data", function(chunk){console.log(chunk.toString())});
 response.on("end", function() {
 return;
 });
 });
 request.end();*/