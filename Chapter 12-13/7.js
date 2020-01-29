     timeInput = prompt("Enter the time in 24-Hour Format");
     timeInputp = parseInt(timeInput);
     if(timeInputp >= 0000 && timeInputp < 1200){
     alert("Good Morning");
     }
     else if(timeInputp >= 1200 && timeInputp < 1700){
     alert("Good AfterNoon");
     }
     else if(timeInputp >= 1700 && timeInputp < 2100){
     alert("Good Evening");
     }
     else if(timeInputp >= 2100 && timeInputp < 2359){
     alert("Good Night!");
     }
     else {alert("Wrong Format");}