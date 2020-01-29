var marksObtained = prompt("Enter your marks obtained");
var totalMarks = prompt("Enter your total marks");
var percentage = marksObtained / totalMarks * 100;
if (percentage >= 80 && percentage <=100){
    document.write("<h2>Marksheet</h2><br/>",
    "Total Marks : " + totalMarks + "<br/>",
    "Marks Obtained : " + marksObtained + "<br/>",
    "Percentage : " + percentage + "<br/>",
    "Grade : A1<br/>",
    "Remarks : Excellent");
}
else if (percentage >= 70 && percentage < 80){
    document.write("<h2>Marksheet</h2><br/>",
    "Total Marks : " + totalMarks + "<br/>",
    "Marks Obtained : " + marksObtained + "<br/>",
    "Percentage : " + percentage + "<br/>",
    "Grade : A<br/>",
    "Remarks : Good"); 
}
else if (percentage >= 60 && percentage < 70){
    document.write("<h2>Marksheet</h2><br/>",
    "Total Marks : " + totalMarks + "<br/>",
    "Marks Obtained : " + marksObtained + "<br/>",
    "Percentage : " + percentage + "<br/>",
    "Grade : B<br/>",
    "Remarks : You need  to improve");
}
else if (percentage < 60){
    document.write("<h2>Marksheet</h2><br/>",
    "Total Marks : " + totalMarks + "<br/>",
    "Marks Obtained : " + marksObtained + "<br/>",
    "Percentage : " + percentage + "<br/>",
    "Grade : Fail<br/>",
    "Remarks : Sorry");
}