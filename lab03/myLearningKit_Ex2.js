function p01Func() {
	

  document.getElementById("problem").innerHTML="<p>Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop</p>"

  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

  /* in Ex3, update display of images */
  document.getElementById("flowchart").setAttribute("src","images/basketball/basketball_design.jpg");
  document.getElementById("flowchart").setAttribute("display","none");
  document.getElementById("js").setAttribute("src","images/basketball/basketball_js.jpg");
  document.getElementById("js").setAttribute("display","none");
  document.getElementById("another").setAttribute("src","images/basketball/basketball_another.jpg");
  document.getElementById("another").setAttribute("display","none");
}


/* in Ex2, uncomment the following function and complete it*/

function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to one of "inline" or "none"	 
     document.getElementById("flowchart").style.display="inline";
	 
  }
  else {
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to one of "inline" or "none"	 
     document.getElementById("flowchart").style.display="none"; 	  
	  
  }
}


function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
     document.getElementById("js").style.display="inline";	 
	 
  }
  else {
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
     document.getElementById("js").style.display="none"; 	  
	  
  }
}


/* in Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/
function checkUncheck3(){
   if (document.getElementById("check3").checked==true) {
      document.getElementById("another").style.display="inline";	     
   }
   else {
      document.getElementById("another").style.display="none"; 	        
   }
 }


/* in Ex3, create function p02Func similar to p01Func */

/* in Ex4, create functions zoomIn() and zoomOut() */
