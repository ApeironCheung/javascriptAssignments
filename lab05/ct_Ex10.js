// in Ex7 to Ex13, change the name of the following function properly
function reverseSame() {
  
  /* this statement defines an object reference to the 
     html element having an ID "output".
	 Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

  // this statement receives some data and parses it to integer
     var a = parseInt(prompt("Please enter a number: ", ""));
    var copy = a;
    var reverse = 0;
    var string = "number: " + a + "<br>";
     while (a > 0){
       reverse = reverse * 10 + a % 10;
       a = (a - (a % 10)) / 10; 
     }
     if (reverse == copy){
       string = string + "equal to it's reverse? Yes <br>"
     } else {
      string = string + "equal to it's reverse? No <br>"
     }
     

 document.getElementById("output").innerHTML = string;
  /* this statement add some message to our output Object used for Ex8
     you would need to change the message to be appropriate in Ex9 to E13 */

  //  outputObj.innerHTML = "number: " + a + "<br><br>its digits: "; // uncomment this line for Ex8

  // translate the rest of your flowcharts to js here:
  







  
  // factorial_B(num);  // for Ex11
  
   
  //the following statements inform the user that the program ended
  //and disable the button.  Ctrol+F5 to refresh the browser in order to start over
  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

// for Ex11
/*factorial_B(num){

}*/