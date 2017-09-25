module.exports = function zeros(expression) {
    var str = String(expression);
    var arr = str.split("*");
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];  
    var result = 1;
    for (var i = 0; i < arr.length; i++) {
    	if (arr[i].indexOf("!!") === -1) {
        	arr2.push(parseInt(arr[i]));
        } else {
        	arr3.push(parseInt(arr[i]));
        }

}
for (var i = 0; i < arr2.length; i++) {
	arr4.push(fact(arr2[i]));
    }
for (var i = 0; i < arr3.length; i++) {
	arr4.push(doubleFact(arr3[i]));
}
for (var i = 0; i < arr4.length; i++) {
	result = multiply(result, arr4[i]);
}
return findZeros(result);  
}

function doubleFact (arg) {
	if (arg <= 0) 
	return 1; 
	else return multiply(arg, doubleFact(arg-2));
}

function fact (arg) {
if (arg === 0) {
	return 1;
}
else return multiply(arg, fact(arg-1));
}
function multiply(first, second) {
if (first*second<9007199254740991) {
		return String(first*second);
	} else {
	first = String(first);
	second = String(second);

	var firstArr = first.split("").reverse();
	var secondArr = second.split("").reverse();
	var result = [];

	for(var i = 0; i<firstArr.length; i++) {
	for(var j = 0; j<secondArr.length; j++) {
	var position = i+j;
	if (result[position] === undefined) {
	result[position] = 0;
} 
	result[position]+=firstArr[i]*secondArr[j];
	
}
}
	for(var k = 0; k<result.length; k++) {
	if (result[k]>9) {
if (result[k+1] === undefined) {
	result[k+1] = 0;
}
	result[k+1] += Math.floor(result[k] / 10);
	result[k] = result[k]%10;

}
}
return result.reverse().join("");
} 
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

