verify(/(ca[rt])/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop"]);

verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/ \./,
    ["bad punctuation ."],
    ["escape the dot"]);

verify(/\b\w{7,}\b/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/\b[^e\s]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    yes.forEach(function (item) {
        if (!regexp.test(item))
            console.log("Failure to match '" + item + "'");
    });
    no.forEach(function (item) {
        if (regexp.test(item))
            console.log("Unexpected match for '" + item + "'");
    });
}
