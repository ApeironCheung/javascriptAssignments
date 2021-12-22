// in Ex2 to Ex6, change the name of the following function properly

function mappingA() {

  //precondition: w, h belongs to real numbers
  //postcondition: perimeter is calculated and outputted
 
  var a=parseInt(document.getElementById("number1").value);

  
  /* in Ex2 to Ex6, you need to replace the following line 
      with some other formulas */


      
  /* in Ex2 to Ex6A, you need to rename "perimeter" to make it appropriate
     for those problems, you may also need to rename p to a better 
	 variable that you might have in your formulas above */ 

/*   in Ex6A mappingA() do sth like
  var a = ...;*/
  if(a >= 90)
    answer = "A+";
  else if (a>=80)
    answer = "A";
  else if (a>=75)
  answer = "B+";
  else if (a>=70)
  answer = "B";
  else if (a>=65)
  answer = "C+";
  else if (a>=60)
  answer = "C";
  else if (a>=55)
  answer = "D+";
  else if (a>=50)
  answer = "D";
  else answer = "F";

  document.getElementById("output").innerHTML= answer; 

}

/* in Ex6B for mappingB() , */
function mappingB(){
  var a=parseInt(document.getElementById("number1").value);
 // uncomment and complete this block

  switch (true){
	case (a>=90): 
		answer="A+";
		break;
	case (a>=80): 
		answer="A";
		break;
  case (a>=75): 
		answer="B+";
		break;   
  case (a>=70): 
		answer="B";
		break;
  case (a>=65): 
		answer="C+";
		break; 
  case (a>=60): 
		answer="C";
		break;
  case (a>=55): 
		answer="D+";
		break;
  case (a>=50): 
		answer="D";
		break;
		// you need to add more cases for other letter grades
	default:
		answer="F";
  }
  document.getElementById("output2").innerHTML= answer; 
}