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



function growTreeButton(clickEvent) {
	//console.log("tree growing");
	growTree();
}

function growTreeEnter(event) {
    if (event.keyCode == 13 || event.which == 13){
        //console.log("tree growing on enter");
        growTree();
        }
    }


growButton.addEventListener("click", growTreeButton);
userChar.addEventListener("keydown", growTreeEnter);
userHeight.addEventListener("keydown", growTreeEnter);


