// in Ex7 to Ex13, change the name of the following function properly
function readInteger() {
  
  /* this statement defines an object reference to the 
     html element having an ID "output".
	 Every time you want to output something, use outputObj */
    var outputObj;
    var a;
    var string = "";
  do{  
     outputObj = document.getElementById("output");

  // this statement receives some data and parses it to integer
     a = parseInt(prompt("Please enter a number: ", ""));
   if (a > 0){
            string = string + a + ": positive<br>";
               }else if(a < 0){ string = string + a + ":negative<br>";}
   }while(a != 0);

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