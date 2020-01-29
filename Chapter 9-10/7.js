var secret = 7;
var a = prompt("Guess the secret number between 1 to 10")
if (a == 7){
    alert("Bingo! Correct answer");
}
else if (a == secret + 1 || a == secret - 1){
    alert("Close enough to correct answer");
}
else { alert ("Wrong Guess");
}