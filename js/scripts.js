
// Toggle between hiding and showing the DIV element for ICONs //

function toggle1() {
	var ele = document.getElementById("toggleText1");
	var image = document.getElementById("displayImage1");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
  	}
	else {
		ele.style.display = "block";

	}
}

function toggle2() {
	var ele = document.getElementById("toggleText2");
	var image = document.getElementById("displayImage2");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
  	}
	else {
		ele.style.display = "block";

	}
}

function toggle3() {
	var ele = document.getElementById("toggleText3");
	var image = document.getElementById("displayImage3");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
  	}
	else {
		ele.style.display = "block";

	}
}

// Quiz Match Elements //

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

}


var result;




   function check()




   {




      var question;

      var value1;

      var value2;

      var value3;




      question = 1;

      value1 = JavaScript;

      value2 = Python;

      value3 = CSharp;







      result = "";




      var choice;




      for (question = 1; question <= 3; question++) {




         var q = document.forms['quiz'].elements['q'+question];




            for (var i = 0; i < q.length; i++) {

               if (q[i].checked) {

                  choice = q[i].value;

               }

            }




            if (choice == "value1") {

               value1++;

            }




            if (choice == "value2") {

               value2++;

            }




            if (choice == "value3") {

               value3++;




            }




         }




      if (value1 >= value2 && value1 >= value3 && value1 > 0) {




         // value1 is the highest

         result = "JavaScript";




      }




      else if (value2 > value1 && value2 >= value3 && value2 > 0) {




         // value2 is the highest

         result = "Python";




      }




      else if (value3 > value1 && value3 > value2 && value3 > 0) {




         // value3 is the highest

         result = "CSharp";










      window.location = result + '.html';




   }
