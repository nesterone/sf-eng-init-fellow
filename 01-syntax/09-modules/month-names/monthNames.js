/**
 * Created by nesterone on 11/1/15.
 */
var month = function(){
  var names = ["January","Febuary","March","Aprile","May","June",
               "July","Augast","Sepetember","October","November","December"];
  return {name: function(number){return names[number];},
          number: function(name){return (names.indexOf(name))}};
}();

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10
