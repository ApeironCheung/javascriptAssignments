// in Ex7 to Ex13, change the name of the following function properly
function nestedLoops() {
  
  /* this statement defines an object reference to the 
     html element having an ID "output".
	 Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");
    
  // this statement receives some data and parses it to integer
     var a = parseInt(prompt("Please enter a number: ", ""));

  /* this statement add some message to our output Object used for Ex8
     you would need to change the message to be appropriate in Ex9 to E13 */

  //  outputObj.innerHTML = "number: " + a + "<br><br>its digits: "; // uncomment this line for Ex8

  // translate the rest of your flowcharts to js here:
  outputObj.style.textAlign = "left";
  result = "";
  for(i = 0; i < a; i++){
    for(j = 0; j <= i; j++)
    {
      result = result + "[] "
    } 
    result = result + "<br></br>"
}
// var string = "4" * 5
 document.getElementById("output").innerHTML = "Number: " + a + "<br><br>" + result;
// document.getElementById("output").innerHTML = string;
  
  // factorial_B(num);  // for Ex11
   
  //the following statements inform the user that the program ended
  //and disable the button.  Ctrol+F5 to refresh the browser in order to start over
  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  
}