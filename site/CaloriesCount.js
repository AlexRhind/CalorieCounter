// JavaScript Document


//Header and footer functions - popUps, persistent headers and footers
$ (function () {
		$ ("#devPopUp").enhanceWithin().popup();
	});
		
$ (function () {
		$ ("#contactPopUp").enhanceWithin().popup();
	});
		
$ (function () {
		$ ("[data-role='footer']").toolbar();
	});

$ (function () {
		$ ("[data-role='header']").toolbar();
	});




//Random spash screen generator

function imgRecipe () {
	
	var picRef = Math.floor(Math.random() * 8 + 1); //generate random number 1-8
	
	switch (picRef) {
			
		case 1 :
				document.getElementById("recipeCopy").innerHTML = "<p><strong>Recipe 01</strong> | Sweet potato soup with salsa relish</p>";
				document.getElementById("splashImg").id = "splashImg1";
				break;
			
		case 2 :
				document.getElementById("recipeCopy").innerHTML = "<p><strong>Recipe 02</strong> | Falafel wraps</p>";
				document.getElementById("splashImg").id = "splashImg2";
				break;
			
		case 3 :
				document.getElementById("recipeCopy").innerHTML = "<p><strong>Recipe 03</strong> | Coconut chickpea curry</p>";
				document.getElementById("splashImg").id = "splashImg3";
				break;
			
		case 4 :
				document.getElementById("recipeCopy").innerHTML = "<p><strong>Recipe 04</strong> | Guacamole</p>";
				document.getElementById("splashImg").id = "splashImg4";
				break;

		case 5 :
				document.getElementById("recipeCopy").innerHTML = "<p><strong>Recipe 05</strong> | Tofu fajitas</p>";
				document.getElementById("splashImg").id = "splashImg5";
				break;

		case 6 :
				document.getElementById("recipeCopy").innerHTML = "<p><strong>Recipe 06</strong> | Feta and olive ciabatta</p>";
				document.getElementById("splashImg").id = "splashImg6";
				break;

		case 7 :
				document.getElementById("recipeCopy").innerHTML = "<p><strong>Recipe 07</strong> | Spiced buns with fresh fruit</p>";
				document.getElementById("splashImg").id = "splashImg7";
				break;

		case 8 :
				document.getElementById("recipeCopy").innerHTML = "<p><strong>Recipe 08</strong> | Lime and coriander couscous</p>";
				document.getElementById("splashImg").id = "splashImg8";
				break;
		}

	}

document.addEventListener("DOMContentLoaded", imgRecipe);




//Splash function on load: fadeout #splash over 2s

$ (function() {
      $('#splash').fadeOut(3000); 
	});

