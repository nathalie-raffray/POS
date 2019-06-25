
var genres = ['Alternatif', 'Punk', 'Metal', 'Instrumentale',
              'Enfants', 'Rock', 'Psych/Prog', 'Jazz', 'Blues',
            'Classique', 'Folk', 'Country', 'Pop', 'Experimentale',
            'Ambient', 'Electronique', 'Spoken Word', 'Humour',
            'Library', 'Bandes Sonores', 'Monde', 'Disco', 'Funk/Soul',
            'Reggae', 'Rap', ' '];

var conditions = ['', 'NM', 'VG+', 'VG', 'VG-', 'G'];

var previousChoiceIIS;

$('#info, #inventory, #supplier').mousedown(function(){
	if(previousChoiceIIS == undefined)
	{
		previousChoiceIIS = document.getElementById('info');
	}

 	previousChoiceIIS.style.backgroundColor = '#ddd';
 	previousChoiceIIS.style.fontWeight = 'normal';
	previousChoiceIIS.style.borderRight='none';
	previousChoiceIIS.style.borderLeft='none';

 	this.style.backgroundColor = '#c0c0c0';
 	this.style.fontWeight = 'bold';
	this.style.borderRight='solid 1px #808080';
	this.style.borderLeft='solid 1px #808080';

 	document.getElementById(previousChoiceIIS.id + 'Box').style.display = 'none';
 	document.getElementById(this.id + 'Box').style.display = 'block';

 	previousChoiceIIS = this;
});

var previousChoiceAT;

$('#adjust, #transfer').mousedown(function(){
	if(previousChoiceAT == undefined)
	{
		previousChoiceAT = document.getElementById('adjust');
	}

 	previousChoiceAT.style.backgroundColor = '#ddd';
 	previousChoiceAT.style.fontWeight = 'normal';
	previousChoiceAT.style.borderRight='none';
	previousChoiceAT.style.borderLeft='none';

 	this.style.backgroundColor = '#c0c0c0';
 	this.style.fontWeight = 'bold';
	this.style.borderRight='solid 1px #808080';
	this.style.borderLeft='solid 1px #808080';

 	document.getElementById(previousChoiceAT.id + 'Box').style.display = 'none';
 	document.getElementById(this.id + 'Box').style.display = 'block';

 	previousChoiceAT = this;
});

var previousChoiceHRC;

$('#history, #reserved, #coming').mousedown(function(){
	if(previousChoiceHRC == undefined)
	{
		previousChoiceHRC = document.getElementById('history');
	}

 	previousChoiceHRC.style.backgroundColor = '#ddd';
 	previousChoiceHRC.style.fontWeight = 'normal';
	previousChoiceHRC.style.borderRight='none';
	previousChoiceHRC.style.borderLeft='none';


 	this.style.backgroundColor = '#c0c0c0';
 	this.style.fontWeight = 'bold';
	this.style.borderRight='solid 1px #808080';
	this.style.borderLeft='solid 1px #808080';

 	document.getElementById(previousChoiceHRC.id + 'Box').style.display = 'none';
 	document.getElementById(this.id + 'Box').style.display = 'block';

 	previousChoiceHRC = this;

});


var previousChoiceSup;

$('.supRow, #histRowBox tr, #reservedRowBox tr, #comingRowBox tr').mousedown(function(){
	if(previousChoiceSup != undefined)
	{
		previousChoiceSup.style.backgroundColor = '#fff';
	}
	this.style.backgroundColor = '#ddd';
 	previousChoiceSup = this;
});

var preButtonPressed;
var tempButton;

$('.add, .sub').click(function(){
	tempButton = preButtonPressed;

	if(preButtonPressed != undefined){
		preButtonPressed.style.borderColor = 'white';
	}
	this.style.borderColor = '#db7093';

	preButtonPressed = this;
});

var id = window.opener.document.getElementById('productOpened').innerHTML;

var xhr = new XMLHttpRequest();

xhr.open('GET', 'popp.php?id='+id, true);

xhr.onload=function(){
	if(this.responseText == 'query failed1'){
		console.log('error');
	}else if(this.responseText == 'query failed2'){
		console.log('0 rows returned');
	}else if(this.responseTest = ''){
		console.log('ugh');
	}
	else{
		 var json = JSON.parse(this.responseText);
		console.log(json);

		var code = json[0][0];

		for(var i=code.length; i<8; i++){
			code = '0' + code;
		}

		if(json[0][1]==1){
			code = 'LP' + code;
		}else if(json[0][1]==0){
			code = 'LN' + code;
		}

		//FOR USED
		if(json[0][1]==1){
			document.getElementById('codeDisplay').innerHTML = code;
			document.getElementById('productCode').value = code;
			document.getElementById('productCode').readOnly = true;
			document.getElementById('description').value = json[0][2] + ' - ' + json[0][3];
			document.getElementById('label').value = json[0][9];
			document.getElementById('fileUnder').value = json[0][10];
			document.getElementById('pressInfo').value = json[0][11];
			document.getElementById('country').value = json[0][12];
			document.getElementById('catalogueNo').value = json[0][13];
			document.getElementById('altCatalogueNo').value = json[0][14];
			document.getElementById('vinylCon').value = conditions[Math.floor(parseInt(json[0][16])/10)];
			document.getElementById('sleeveCon').value = conditions[parseInt(json[0][16])%10];
			document.getElementById('extraInfo').value = json[0][15];
			var selector = document.getElementById('genre');
			var opts = selector.options;
			console.log(opts);
			for(var i=0; i<genres.length; i++){
				if(opts[i].value == genres[json[0][8]-1])
				{
					selector.selectedIndex = i;
					break;
				}
			}
		}


		//FOR NEW
		if(json[0][1]==0){
			document.getElementById('codeDisplay').innerHTML = code;
			document.getElementById('productCode').readOnly = true;
			document.getElementById('productCode').value = code;
			document.getElementById('description').value = json[0][2] + ' - ' + json[0][3];
			document.getElementById('label').value = json[0][11];
			document.getElementById('fileUnder').value = json[0][12];
			document.getElementById('pressInfo').value = json[0][13];
			document.getElementById('country').readOnly=true;
			document.getElementById('catalogueNo').readOnly=true;
			document.getElementById('altCatalogueNo').readOnly=true;
			document.getElementById('vinylCon').readOnly=true;
			document.getElementById('sleeveCon').readOnly=true;
			document.getElementById('extraInfo').value = json[0][14];
			var selector = document.getElementById('genre');
			var opts = selector.options;
			console.log(opts);
			for(var i=0; i<genres.length; i++){
				if(opts[i].value == genres[json[0][10]-1])
				{
					selector.selectedIndex = i;
					break;
				}
			}
		}



	}
}
xhr.send();
