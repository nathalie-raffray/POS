
var genres = ['Alternatif', 'Punk', 'Metal', 'Instrumentale',
              'Enfants', 'Rock', 'Psych/Prog', 'Jazz', 'Blues',
            'Classique', 'Folk', 'Country', 'Pop', 'Experimentale',
            'Ambient', 'Electronique', 'Spoken Word', 'Humour',
            'Library', 'Bandes Sonores', 'Monde', 'Disco', 'Funk/Soul',
            'Reggae', 'Rap', ' '];

var conditions = ['', 'NM', 'VG+', 'VG', 'VG-', 'G'];

var previousChoiceIIS;

$('#info, #inventory, #supplier').mousedown(function(){
  // if(this.id == 'info'){
  //
  // }else if(this.id == 'supplier'){
  //
  // }
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

search = {
  id: id
};


$.ajax({
  type: 'POST',
  url: 'getProductInfo.php',
  data: search,
  success: function(response){
    console.log(response);

    var table = document.getElementById('table');
    var response = JSON.parse(response);
    if(response.error == 'Invalid Query'){
  		console.log('INVALID QUERY');
  	}else if(response.error == 'No results found.'){
  		table.innerHTML = response.error;
  	}else{
  		 var data = JSON.parse(response.data)[0];

  		console.log(data);

  		//var code = parseInt(data.id);

  		// for(var i=code.length; i<8; i++){
  		// 	code = '0' + code;
  		// }
      var code = data.id;

  		if(data.type == 1){
  			code = 'LP' + code;
  		}else if(data.type == 2){
  			code = 'LN' + code;
  		}else if(data.type == 3){
  			code = 'CD' + code;
  		}

      document.getElementById('codeDisplay').innerHTML = code;
      document.getElementById('productCode').value = code;
      document.getElementById('productCode').readOnly = true;
      document.getElementById('description').value = data.description;
      document.getElementById('label').value = data.family;
      document.getElementById('fileUnder').value = data.fileunder;
      document.getElementById('extraInfo').readOnly = true;

  		//FOR USED
  		if(data.type == 1){
  			document.getElementById('pressInfo').value = data.pressinfo;
  			document.getElementById('country').value = data.country;
  			document.getElementById('catalogueNo').value = data.catno;
  			document.getElementById('altCatalogueNo').value = data.altcatno;
  			document.getElementById('vinylCon').value = data.vcond;
  			document.getElementById('sleeveCon').value = data.scond;
        document.getElementById('upc').readOnly = true;

  			//document.getElementById('extraInfo').value = json[0][15]; //info supp?
      }

  		//FOR NEW
  		if(data.type == 2){
        document.getElementById('upc').readOnly = true;
  			document.getElementById('pressInfo').value = data.pressinfo;
  			document.getElementById('country').readOnly=true;
  			document.getElementById('catalogueNo').readOnly=true;
  			document.getElementById('altCatalogueNo').readOnly=true;
  			document.getElementById('vinylCon').readOnly=true;
  			document.getElementById('sleeveCon').readOnly=true;
  		//	document.getElementById('extraInfo').value = json[0][14];

        ////Change Inventory sign
        var el;
        if(data.inv_ccustomers > 0){
          el = document.getElementById('iCustOrder');
          el.innerHTML = data.inv_floor + ' Coming For Customers';
          el.style.backgroundColor = 'yellow';
        }
        if(data.inv_cstock > 0){
          el = document.getElementById('iStockOrder');
          el.innerHTML = data.inv_floor + ' Coming For Stock';
          el.style.backgroundColor = 'yellow';
        }

  		}

      if(data.type == 3){ //FOR CDs
        document.getElementById('upc').value = data.upc;
  			document.getElementById('pressInfo').readOnly = true;
  			document.getElementById('country').readOnly=true;
        document.getElementById('catalogueNo').value = data.catno;
  			document.getElementById('altCatalogueNo').value = data.altcatno;
  			document.getElementById('vinylCon').readOnly=true;
  			document.getElementById('sleeveCon').readOnly=true;
  		//	document.getElementById('extraInfo').value = json[0][14];
      }


      var selector = document.getElementById('genre');
      var opts = selector.options;
      console.log(opts);
      for(var i=0; i<opts.length; i++){
        if(opts[i].value == data.class)
        {
          selector.selectedIndex = i;
          break;
        }
      }

      var el;
      var totalInv = parseInt(data.inv_floor) + parseInt(data.inv_basement) + parseInt(data.reserved);
      el = document.getElementById('iTotal');
      el.innerHTML = totalInv + ' Total';
      el.style.backgroundColor = 'rgb(119, 194, 66)';

      el = document.getElementById('iFloor');
      el.innerHTML = data.inv_floor + ' Floor';
      if(data.inv_floor > 0){
          el.style.backgroundColor = 'rgb(119, 194, 66)';
      }else if(data.inv_floor < 0){
        el.style.backgroundColor = 'red';
      }
      el = document.getElementById('iBasement');
      el.innerHTML = data.inv_basement + ' Basement';
      if(data.inv_basement > 0){
        el.style.backgroundColor = 'blue';
      }else if(data.inv_basement < 0){
        el.style.backgroundColor = 'red';
      }
      el = document.getElementById('iReserved');
      el.innerHTML = data.reserved + ' Reserved';
      if(data.reserved > 0){
        el.style.backgroundColor = 'orange';
      }else if(data.reserved < 0){
        el.style.backgroundColor = 'red';
      }


   }
 }
});

$('.adjustTransferForm').submit(function(e){
  e.preventDefault();
  var input;
  var qty;
  var id = document.getElementById('productCode').value;
  //if(radioValue == 'total')
  if(this.parentElement.id == 'adjustBox'){
    console.log('HI');
    var radioValue = $("input[name='adjust']:checked").val();
    if(radioValue == undefined){
      return;
    }
    var floorbasement = document.getElementById('floorbasement').value;
    //$("input[name='adjust']:checked").val();
    if(radioValue == 'total'){
      qty = document.getElementById('totalAdjustBy').value;
    }else if(radioValue == 'add'){
      qty = document.getElementById('addAdjustBy').value;
    }
    //var action = 'adjust';
    input = {
      action: 'adjust',
      id: id,
      floorbasement: floorbasement,
      totalAdd: radioValue,
      qty: qty
    }
    console.log(input);
  }else if(this.parentElement.id == 'transferBox'){

    qty = $("input[name='transferQty']").val();
    var transferFrom = document.getElementById('from').value;
    var transferTo = document.getElementById('to').value;
    input = {
      action: 'transfer',
      id: id,
      transferFrom: transferFrom,
      transferTo: transferTo,
      qty: qty
    }
  }
  $.ajax({
    type: 'POST',
    url: 'adjustTransfer.php',
    data: input,
    success: function(response){
      console.log(response);
      response = JSON.parse(response);
      if(response.error == 'Invalid Query.'){
        console.log('INVALID QUERY');
      }else if(response.error == 'Nothing happened.'){
        return;
      }else{
        console.log(response);
        var el;
        if(response.inv_floor > 0){
            el = document.getElementById('iFloor');
            el.innerHTML = response.inv_floor + ' Floor';
            el.style.backgroundColor = 'rgb(119, 194, 66)';
        }else if(response.inv_floor == 0){
          el = document.getElementById('iFloor');
          el.innerHTML = response.inv_floor + ' Floor';
          el.style.backgroundColor = 'rgb(159, 159, 159)';
        }else{
          el.style.backgroundColor = 'red';
        }
        if(response.inv_basement > 0){
          el = document.getElementById('iBasement');
          el.innerHTML = response.inv_basement + ' Basement';
          el.style.backgroundColor = 'blue';
        }else if(response.inv_basement == 0){
          el = document.getElementById('iBasement');
          el.innerHTML = response.inv_basement + ' Basement';
          el.style.backgroundColor = 'rgb(159, 159, 159)';
        }else{
          el.style.backgroundColor = 'red';
        }
        var total = parseInt(response.inv_floor) + parseInt(response.inv_basement) + parseInt(response.reserved);
        if(total > 0){
          el = document.getElementById('iTotal');
          el.innerHTML = total + ' Total';
          el.style.backgroundColor = 'rgb(108, 186, 58)';
        }else if(total == 0){
          el = document.getElementById('iTotal');
          el.innerHTML = total + ' Total';
          el.style.backgroundColor = 'rgb(159, 159, 159)';
        }else{
          el.style.backgroundColor = 'red';
        }
      }
      //console.log(response);

     }
  });
});
