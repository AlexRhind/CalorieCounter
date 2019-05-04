// JavaScript Document

////Fruit pages - adss the value of #kcalNum to the local storage

	if (!localStorage.kcal) {
		
		localStorage.setItem ('kcal', '0');
		document.getElementById("counterDisplay").innerHTML = "You have counted 0 kcals";
	}
	else {
		document.getElementById("counterDisplay").innerHTML = "You have counted " + parseInt(localStorage.kcal) + " kcals";
		
				console.log("1-kcal value is " + parseInt(localStorage.kcal));
	}
		
	
	
	//add food kcal value to local storage
	document.getElementById("kcalSubmit").addEventListener ("click", function (){
		"use strict";
		
		var localKcal = parseInt(localStorage.kcal);

				console.log("2-var localKcal localStorage is " + localKcal);

				console.log("3-localKcal typeof is " + typeof localKcal);

		var myKcal= parseInt(document.getElementById("kcalNum").innerHTML);
		
				console.log("4-myKcal button is " + myKcal);
		
		var sumKcal = myKcal + localKcal; 
		
				console.log("5-myKcal button is " + myKcal + " plus " + localKcal);

				console.log("6-sumKal is " + sumKcal);


		localStorage.setItem ('kcal', sumKcal);
		
		document.getElementById("counterDisplay").innerHTML = "You have counted " + sumKcal + " kcals";
		
		
	});
		



	document.getElementById("resetBtn").addEventListener("click", function(){
			
				"use strict";
		
				var reset = window.confirm("Do you really want to reset CalCount?");
		
				if (reset === true) {

						localStorage.setItem ('kcal', '0'); // this could also use localStorage.clear()
						document.getElementById("counterDisplay").innerHTML = "You have counted 0 kcals";
					
				} else { 

						return;

					}
		});

















