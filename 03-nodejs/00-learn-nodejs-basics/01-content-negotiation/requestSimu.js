/**
 * Created by Iaroslav Zhbankov on 21.03.2016.
 */
var http = require("http");

var request = http.request({
    hostname: "localhost",
    port: 8000,
    path: "../../text.txt",
    method: "GET"
}, function(response) {
    console.log(response.statusCode);
    response.on("end", function() {
        return;
    });
});
request.end();