module.exports = function zeros(expression) {
  var str = String(expression);
    var arr = str.split("*");
    var arr2 = [];
    var arr3 = [];  
	var result = 1;
    for (var i = 0; i < arr.length; i++) {
    	if (arr[i].indexOf("!!") === -1) {
        	arr2.push(parseInt(arr[i]));
        } else {
        	arr3.push(parseInt(arr[i]));
        }

}
for (var i = 0; i < arr2.length; i++) {
	result *=fact(arr2[i]);
    }
for (var i = 0; i < arr3.length; i++) {
	result*=doubleFact(arr3[i]);
}
return findZeros(result);  
}

function doubleFact (arg) {
	if (arg <= 0) 
	return 1; 
	else return arg * doubleFact(arg-2);
}

function fact (arg) {
if (arg === 0) {
	return 1;
}
else return arg*fact(arg-1);
}

function findZeros(argum) {
var arg = String(argum);
 var arr = arg.split("").reverse();
	var count = 0;
 for (var i = 0; i < arr.length; i++) {
	if (arr[i] == "0") {count++}
	else return count;
}
}

