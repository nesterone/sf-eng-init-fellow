var http = require("http");
var reqTypes = ["text/plain", "text/html", "application/json"];

for (var i = 0; i < reqTypes.length; i++) {
    var request = http.request({
        hostname: "eloquentjavascript.net",
        path: "/author",
        method: "GET",
        headers: {
            Accept: reqTypes[i]
        }
    }, function (response) {
        console.log("Status code: ", response.statusCode);
        response.on("data", function (chunk) {
            console.log(chunk.toString());
        });
        response.on("end", function () {
            return;
        });
    });

    request.end();
}
