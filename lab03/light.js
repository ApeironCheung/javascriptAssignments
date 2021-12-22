/* Task 1 - write your code here */
function onA(){

 /* set image src to be that for light1, and set message texts to be "light 1 is on"  */
 document.getElementById("message").innerHTML = "<p>light 1 is on</p>"
 document.getElementById("light").src = "images/light/light_1.jpg";  
}

/* implement function onB(), onC(), onD(), onE() that are similar to onA() */
function onB(){
    document.getElementById("message").innerHTML = "<p>light 2 is on</p>"
    document.getElementById("light").src = "images/light/light_2.jpg";  
}

function onC(){
    document.getElementById("message").innerHTML = "<p>light 3 is on</p>"
    document.getElementById("light").src = "images/light/light_3.jpg";  
}

function onD(){
    document.getElementById("message").innerHTML = "<p>light 4 is on</p>"
    document.getElementById("light").src = "images/light/light_4.jpg";  
}

function onE(){
    document.getElementById("message").innerHTML = "<p>light 5 is on</p>"
    document.getElementById("light").src = "images/light/light_5.jpg";  
}

/* implement function oFF() for turning off the light*/
function oFF(){
    document.getElementById("message").innerHTML = "<p>light is off</p>"
    document.getElementById("light").src = "images/light/light_0.jpg"; 
}
