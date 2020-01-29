var a = prompt("Enter a number");
var b = prompt("Enter another number");
var op = prompt("Enter operation you want to perform");
var aa = parseInt(a);
var bb = parseInt(b);
if (op == "+") {
    c = aa + bb;
    alert(c);
}
else if (op == "-"){
    c = a -b;
    alert(c);
}
else if (op == "*"){
    c = a * b;
    alert(c);
}
else if (op == "/"){
    c = a / b;
    alert(c);
}
else if ("%"){
    c = a % b;
    alert(c);
}
else { 
    alert ("Wrong operation");
};