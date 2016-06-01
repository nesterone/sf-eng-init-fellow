var terms = [];
for (var name in window)
    terms.push(name);

var node = document.querySelector('input');
var sugest = document.querySelector('#suggestions');

node.addEventListener('input', function () {
    clear();
    var str = node.value;
    for (var i = 0; i < terms.length; i++)
        for (var j = 0; j <= str.length; j++)
            if (terms[i].slice(0, j) == str) {
                snode = document.createElement('div');
                textnode = document.createTextNode(terms[i]);
                snode.appendChild(textnode);
                sugest.appendChild(snode);
            }
});

sugest.addEventListener('click', function (event) {
    node.value = event.target.textContent;
    clear();
});

function clear() {
    var sug = sugest.getElementsByTagName('div');
    for (var j = 0; j < sug.length; j++)
        sug[j].textContent = '';
}