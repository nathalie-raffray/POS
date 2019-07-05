var previousChoiceIN;

$('#info, #notes, #merge').mousedown(function(){
	if(previousChoiceIN == undefined)
	{
		previousChoiceIN = document.getElementById('info');
	}

 	previousChoiceIN.style.backgroundColor = '#ddd';
 	previousChoiceIN.style.fontWeight = 'normal';
 	previousChoiceIN.style.borderLeft = 'none';
	previousChoiceIN.style.borderRight = 'none';

 	this.style.backgroundColor = '#c0c0c0';
 	this.style.fontWeight = 'bold';
 	this.style.borderLeft = '1px solid #808080';
 	this.style.borderRight = '1px solid #808080';

 	document.getElementById(previousChoiceIN.id + 'Box').style.display = 'none';
 	document.getElementById(this.id + 'Box').style.display = 'flex';

 	previousChoiceIN = this;
});

var preButtonPressed;
var tempButton;

$('.phoneSel').click(function(){
	tempButton = preButtonPressed;

	if(preButtonPressed != undefined){
		preButtonPressed.style.backgroundColor = 'white';
	}
	else{
		 document.getElementById('firstButton').style.backgroundColor = 'white';
	}
	this.style.backgroundColor = '#03A9F4';
	preButtonPressed = this;
});
