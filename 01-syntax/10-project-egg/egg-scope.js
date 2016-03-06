/**
 * Created by Iaroslav Zhbankov on 29.01.2016.
 */
specialForms["set"] = function (args, env) {
    if (args.length != 2 || args[0].type != "word" || args[1].type != "word")
        throw new SyntaxError("Bad use of set");
    var valueName = args[0].name;
    var value = evaluate(args[1], env);


    for (var node = env; node; node = Object.getPrototypeOf(node)) {
        if (Object.prototype.hasOwnProperty.call(node, valueName)) {
            node[valueName] = value;
            return value;
        }
    }
    throw new ReferenceError("Setting undefined variable " + valueName);
};