var res = '';
var textarea = document.querySelector("textarea");
var button = document.querySelector("button");
var output = document.querySelector("#output");
button.addEventListener('mousedown', function () {
    try {
        var plusOne = new Function(textarea.value);
        output.innerText = plusOne();
    }
    catch (e) {
        output.innerText = 'Name of error: ' + e.name + '\n' +
            'Error message: ' + e.message;
    }
});