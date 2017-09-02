var $choice1 = $("#choice")
var $choice2 = $("#choice2")
var $button = $(".button")
var $button2 = $(".button2")
var $turn = $(".turn")





var state = {
	turn: "Player 1",
	pieces1: 10,
	pieces2: 10
}



function changeTurn(){
	if (state.turn == "Player 1"){
		state.turn = "Player 2"
		console.log(state.turn)
	} else if (state.turn == "Player 2"){
		state.turn = "Player 1"
		console.log(state.turn)
	}
	$turn.append(state.turn)
}



// 1st Heap Button

$button.on("click", function(){
	if (isNaN($choice1.val())){
		alert("Please pick a number between 1 and " + state.pieces1)
	}	else if ($choice1.val() > state.pieces1 | $choice1.val() < 0 ) { 
			alert("Please pick a number between 1 and " + state.pieces1)
	} 	else {
			state.pieces1 = state.pieces1 - $choice1.val()
			console.log(state.pieces1)
			if (state.pieces1 == 0){
				console.log("heap finished")
			} else {
				changeTurn()
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
			state.pieces2 = state.pieces2 - $choice2.val()
			console.log(state.pieces2)
			if (state.pieces2 == 0){
				console.log("heap finished")
			} else {
				changeTurn()
			}
	}
});