var userHeight = document.getElementById("tree-height");
var userChar = document.getElementById("building-block");

var growButton = document.getElementById("grow-tree");
var space = " ";



function growTree() {
	for (var i = 1; i <=userHeight.value; i++) {
		var spacing = space.repeat(userHeight.value - i);
		var blocks = userChar.value.repeat((2 * i)-1);
		console.log(spacing.concat(blocks));

	}
}

function fieldVerify() {
	if (isNaN(userHeight.value*1) === true || userChar.value.length === 0){
		alert("Please enter both a height and character to grow your tree.");
	} else if (userHeight.value.length === 0) {
		alert("Please enter both a height and character to grow your tree.");
	} else if (isNaN(userHeight.value*1) === false && userChar.value.length !== 0) {
		growTree();
	}
}


function growTreeButton(clickEvent) {
	//console.log("tree growing");
	fieldVerify();
}

function growTreeEnter(event) {
    if (event.keyCode == 13 || event.which == 13) {
        //console.log("tree growing on enter");
		fieldVerify();       
	}
}


growButton.addEventListener("click", growTreeButton);
userChar.addEventListener("keydown", growTreeEnter);
userHeight.addEventListener("keydown", growTreeEnter);


