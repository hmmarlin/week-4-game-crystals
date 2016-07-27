$( document ).ready(function() {


function startGame() {


	
	// declare global variables
	var wins = 0;
  	var losses = 0;
  	var points= 0;


  	var reset = function(){
		points =0;
		 $('#yourScore').html(" "); 
		blueValue=Math.floor(Math.random() * 15) +1 ;
		redValue=Math.floor(Math.random() * 15) +1 ;
		greenValue=Math.floor(Math.random() * 15) +1 ;
		redValue=Math.floor(Math.random() * 15) +1 ;
		random =Math.floor(Math.random() * 125)+ 50;
		$('#randoNumber').html("Random Number: " + random); 
	}
  
	//generate a random number
	var random =Math.floor(Math.random() * 125)+ 50;
	$('#randoNumber').append(random); 
	
    
	// add crystal images
    $('#Blue').append('<img src=assets/images/blue.png>');
    $('#Green').append('<img src=assets/images/green.png>');
    $('#Yellow').append('<img src=assets/images/yellow.png>');
    $('#Red').append('<img src=assets/images/red.png>');

  	// add value to crystal images
    var blueValue = Math.floor(Math.random() * 15) +1 ;
 
	var redValue = Math.floor(Math.random() * 15) + 1;

	var greenValue = Math.floor(Math.random() * 15) + 1;

	var yellowValue = Math.floor(Math.random() * 15) +1 ;



	// add click and point functionality
	$('.col-md-3').on('click', function () {
		if (this.id == "Blue") {
			points = points + blueValue;
			 $('#yourScore').html(points); 
		}

		else if (this.id == "Red") {
			points = points + redValue;
			 $('#yourScore').html(points); 
		}

		else if (this.id == "Green") {
			points = points + greenValue;
			 $('#yourScore').html(points); 
		}
		else if (this.id == "Yellow") {
			points = points + yellowValue;
			 $('#yourScore').html(points); 
		}	
	
	// add if statements
		 if (points === random){
				alert('You win!');
				wins++;
				$('#wins').html('Wins: ' + wins + '</p>');
				reset();
				
			}
		 else if (points > random){
		 		alert('You lose!');
		 		losses++;
		 		$('#loss').html('Losses: ' + losses + '</p>');
		 		reset();
		 	
			}
		 		
		 	});

		 

	 };
	 		startGame();;
	});
	





 

