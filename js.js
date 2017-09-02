// Variables

var $choice1 = $("#choice")
var $choice2 = $("#choice2")
var $button = $(".button")
var $button2 = $(".button2")
var $turn = $(".turn")
var $won = $(".won")
var $heap1 = $(".heap1")
var $heap2 = $(".heap2")

var $image = $("<img />",{
	"class" : "heap1",
	"src" : "piece.png.png"
})

var $image2 = $("<img />",{
	"class" : "heap2",
	"src" : "piece.png.png"
})


// State

var state = {
	turn: "Player 1",
	pieces1: 10,
	pieces2: 10
}




// Initial appends

$turn.append(state.turn)


// $heap1.append($image)
$image.appendTo($heap1)
$image2.appendTo($heap2)



// Function for appending image





// Function to determine winner.

function hasWon(){
	if (state.pieces1== 0 & state.pieces2 == 0){
		$won.append(state.turn + " Wins!")
	}
}


// Funtion to change turn


function changeTurn(){
	if (state.turn == "Player 1"){
		state.turn = "Player 2"
	} else if (state.turn == "Player 2"){
		state.turn = "Player 1"
	}
	$turn.empty();
	$turn.append(state.turn);
	
}



// 1st Heap Button

$button.on("click", function(){
	if (isNaN($choice1.val())){
		alert("Please pick a number between 1 and " + state.pieces1)
	}	else if ($choice1.val() > state.pieces1 | $choice1.val() < 0 ) { 
			alert("Please pick a number between 1 and " + state.pieces1);
	} 	else {
			state.pieces1 = state.pieces1 - $choice1.val()
			if (state.pieces1 == 0){
				$heap1.empty();
				$heap1.append(state.pieces1)
				hasWon();
			} else {
				$heap1.empty();
				$heap1.append(state.pieces1)
				$image.appendTo($heap1)
				changeTurn();
			} 
	}
});

// 2nd Heap Button

$button2.on("click", function(){
	if (isNaN($choice2.val())){
		alert("Please pick a number between 1 and " + state.pieces2)
	}	else if ($choice2.val() > state.pieces2 | $choice2.val() < 0 ) { 
			alert("Please pick a number between 1 and " + state.pieces2)
	} 	else {
			state.pieces2 = state.pieces2 - $choice2.val();
			if (state.pieces2 == 0){
				$heap2.empty();
				$heap2.append(state.pieces2)
				hasWon();
			} else {
				$heap2.empty();
				$heap2.append(state.pieces2)
				$image2.appendTo($heap2)
				changeTurn();

			}
	}
});




