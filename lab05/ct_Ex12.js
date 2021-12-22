// in Ex7 to Ex13, change the name of the following function properly
function fibonacci() {
  
  /* this statement defines an object reference to the 
     html element having an ID "output".
	 Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

  // this statement receives some data and parses it to integer
     var n = parseInt(prompt("Please enter a number: ", ""));

  /* this statement add some message to our output Object used for Ex8
     you would need to change the message to be appropriate in Ex9 to E13 */

  //  outputObj.innerHTML = "number: " + a + "<br><br>its digits: "; // uncomment this line for Ex8

  // translate the rest of your flowcharts to js here:
  var a = 0
  var b = 1;
  var c;
  var string = "number: " + n + "<br>Fibonachi: 0, 1,";
  for ( var i = 2; i <= n; i++){
    c = a + b;
    a = b;
    b = c;
    string = string + c + ", "; 
  }


document.getElementById("output").innerHTML = string;
  
  // factorial_B(num);  // for Ex11
   
  //the following statements inform the user that the program ended
  //and disable the button.  Ctrol+F5 to refresh the browser in order to start over
  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  
}