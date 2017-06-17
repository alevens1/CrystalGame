$(document).ready(function() {

	///creating crystal images through file paths
	crystals = ['assets/images/redcrystal.jpeg', 'assets/images/bluecrystal.jpeg', 'assets/images/yellowcrystal.jpeg', 'assets/images/greencrystal.jpeg'];
 
 	///create variables for score counting and text to appear on html
	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
 

///call newCrystals function 
	function newCrystals ()  {
		var numbers = [ ]
			while(numbers.length < 4) {
				var randomnumber = Math.ceil(Math.random()*12)
				var found = false;
				for (var i = 0; i < numbers.length; i++){
					 if (numbers[i] == randomnumber){
							found = true; break
					}
				}
				if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);
		
		for (i = 0; i < numbers.length; i++) {
				var imageCrystal = $('<img>');
				imageCrystal.attr('data-num', numbers[i]);
				imageCrystal.attr('src', crystals[i]);
				imageCrystal.attr('alt', 'crystals');
				imageCrystal.addClass(‘crystalimage')
				$(”#crystals”).append(imageCrystal);
			}
 
	}
 
 
 
	function newGame() {
			counter = 0;
			$(“#yourScore”).text(counter);
	
			function randomNum(min,max){
					return Math.floor(Math.random() * (max - min + 1)) + min;
					}
	
			var guess = randomNum (5, 100);
 
	$('.value').text(guess);
 
	$('.crystalImage').on(‘click’, function(){
		counter = counter + parseInt($(this).data(‘num’));
 
	$(“#yourScore”).text(counter);
 
		if (counter == numberToGuess){
		$(“#status”).yext(“You won!”);
		wins ++;
		$(“#win”).text(wins);
		console.log(wins);
		$(“#crystals”).empty();
		newCrystals();
		newGame();
	} else if ( counter > guess){
		$('#status').text("You Lose")
		losses ++;
		$('#loss').text(losses);
		console.log(losses)
		$('#crystals').empty();
		newCrystals();
		newGame();
		}
 
	});
  }
 
 
});
///run newCrystals and newGame functions
	newCrystals();
	newGame();
