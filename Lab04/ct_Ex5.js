// in Ex2 to Ex6, change the name of the following function properly

function divisibleBy6() {

  //precondition: w, h belongs to real numbers
  //postcondition: perimeter is calculated and outputted

  
  var a=parseFloat(document.getElementById("number1").value);

  
  /* in Ex2 to Ex6, you need to replace the following line 
      with some other formulas */
if (a % 6 == 0) {
  result = "divisible by 6";
  if(a == 0)  {
    result = result + "<br>program ended";
  }
}else {result = "not divisible by 6";}

      
  /* in Ex2 to Ex6A, you need to rename "perimeter" to make it appropriate
     for those problems, you may also need to rename p to a better 
	 variable that you might have in your formulas above */ 

  /* in Ex6A mappingA() do sth like
  var a = ...;
  if(a >= 90)
    answer = "A+";
  else if (a>=80)
    answer = "A";
  else if ....
  */

  document.getElementById("output").innerHTML= result; 

}

/* in Ex6B for mappingB() , 
function mappingB(){

  uncomment and complete this block
  var a = ...
  switch (true){
	case (a>=90): 
		answer="A+";
		break;
	case (a>=80): 
		answer="A";
		break;
		// you need to add more cases for other letter grades
	default:
		answer="F";
  }
  
}*/