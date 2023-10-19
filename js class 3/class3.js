var fruite = ["apple", "orrange","banana","mango" ];
// console.log(fruite.toString());


var fruite = ["apple", "orrange","banana","mango" ];
// console.log(fruite.join("-"));

var numbers = [[7,5],[3,8],[9,1]];
var newNumbers = numbers.flat();
// console.log(numbers);
// console.log(newNumbers);

var team1 = ["salim", "maruf"];
var team2 = ["saim", "mehedi", "tarif"];
var team3 = ["saim", "mehedi", "tarif"];
var fullTeam = team1.concat(team2,team3);
// console.log(fullTeam);




var team = ["saim", "mehedi", "tarif"];
var newTeam = team.concat("jahid");
// console.log(newTeam);


var team = ["saim", "mehedi", "tarif"];
team.shift();
// console.log(team);


var team = ["saim", "mehedi", "tarif"];
team.unshift("rakib");
// console.log(team);

var team = ["abc","def" ,"ghi","jkl"]
team.splice(2,0, "mmm")
console.log(team)
