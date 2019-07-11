
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
          el.style.backgroundImage = 'linear-gradient(rgb(205, 166, 56), rgb(228, 188, 62))';
          el.style.borderTop = '1px solid rgb(240, 211, 128)';
          el.style.borderBottom = '1px solid rgb(205, 166, 56)';
        }
        if(data.inv_cstock > 0){
          el = document.getElementById('iStockOrder');
          el.innerHTML = data.inv_floor + ' Coming For Stock';
          el.style.backgroundImage = 'linear-gradient(rgb(205, 166, 56), rgb(228, 188, 62))';
          el.style.borderTop = '1px solid rgb(240, 211, 128)';
          el.style.borderBottom = '1px solid rgb(205, 166, 56)';
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
      if(totalInv > 0){
        el.style.backgroundImage = 'linear-gradient(rgb(95, 156, 52), rgb(119, 194, 66))';
        el.style.borderTop = 'solid 1px rgb(136, 222, 77)';
        el.style.borderBottom = 'solid 2px rgb(95, 156, 52)';
      }else if(totalInv < 0){
        colorRed(el);
      }


      el = document.getElementById('iFloor');
      el.innerHTML = data.inv_floor + ' Floor';
      if(data.inv_floor > 0){
        el.style.backgroundImage = 'linear-gradient(rgb(95, 156, 52), rgb(119, 194, 66))';
        el.style.borderTop = 'solid 1px rgb(136, 222, 77)';
        el.style.borderBottom = 'solid 2px rgb(95, 156, 52)';
      }else if(data.inv_floor < 0){
        colorRed(el);
      }
      el = document.getElementById('iBasement');
      el.innerHTML = data.inv_basement + ' Basement';
      if(data.inv_basement > 0){
        el.style.backgroundImage = 'linear-gradient(rgb(0, 51, 204), rgb(0, 0, 153))';
        el.style.borderTop = '1px solid rgb(0, 153, 255)';
        el.style.borderBottom = '1px solid rgb(0, 0, 102)';
      }else if(data.inv_basement < 0){
        colorRed(el);
      }
      el = document.getElementById('iReserved');
      el.innerHTML = data.reserved + ' Reserved';
      if(data.reserved > 0){
        el.style.backgroundImage = 'linear-gradient(rgb(220, 116, 43), rgb(242, 142, 72))';
        el.style.borderTop = '1px solid rgb(215, 112, 37)';
        el.style.borderBottom = '1px solid rgb(245, 142, 72)';
      }else if(data.reserved < 0){
        colorRed(el);
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
            el.style.backgroundImage = 'linear-gradient(rgb(95, 156, 52), rgb(119, 194, 66))';
            el.style.borderTop = 'solid 1px rgb(136, 222, 77)';
            el.style.borderBottom = 'solid 2px rgb(95, 156, 52)';
        }else if(response.inv_floor == 0){
          el = document.getElementById('iFloor');
          el.innerHTML = response.inv_floor + ' Floor';
          el.style.backgroundImage = 'linear-gradient(rgb(158, 158, 158), rgb(182, 182, 182))';
          el.style.borderTop = '1px solid rgb(218, 218, 218)';
          el.style.borderBottom = '1px solid rgb(158, 158, 158)';
        }else{
          colorRed(el);
        }
        if(response.inv_basement > 0){
          el = document.getElementById('iBasement');
          el.innerHTML = response.inv_basement + ' Basement';
          el.style.backgroundImage = 'linear-gradient(rgb(0, 51, 204), rgb(0, 0, 153))';
          el.style.borderTop = '1px solid rgb(0, 153, 255)';
          el.style.borderBottom = '1px solid rgb(0, 0, 102)';
        }else if(response.inv_basement == 0){
          el = document.getElementById('iBasement');
          el.innerHTML = response.inv_basement + ' Basement';
          el.style.backgroundImage = 'linear-gradient(rgb(158, 158, 158), rgb(182, 182, 182))';
          el.style.borderTop = '1px solid rgb(218, 218, 218)';
          el.style.borderBottom = '1px solid rgb(158, 158, 158)';
        }else{
          colorRed(el);
        }
        var total = parseInt(response.inv_floor) + parseInt(response.inv_basement) + parseInt(response.reserved);
        if(total > 0){
          el = document.getElementById('iTotal');
          el.innerHTML = total + ' Total';
          el.style.backgroundImage = 'linear-gradient(rgb(95, 156, 52), rgb(119, 194, 66))';
          el.style.borderTop = 'solid 1px rgb(136, 222, 77)';
          el.style.borderBottom = 'solid 2px rgb(95, 156, 52)';
        }else if(total == 0){
          el = document.getElementById('iTotal');
          el.innerHTML = total + ' Total';
          el.style.backgroundImage = 'linear-gradient(rgb(158, 158, 158), rgb(182, 182, 182))';
          el.style.borderTop = '1px solid rgb(218, 218, 218)';
          el.style.borderBottom = '1px solid rgb(158, 158, 158)';
        }else{
          colorRed(el);
        }
      }
      //console.log(response);

     }
  });
});

function colorRed(el){
  el.style.backgroundImage = 'linear-gradient(rgb(220, 20, 60), rgb(139, 0, 0))';
  el.style.borderTop = '1px solid rgb(205, 92, 92)';
}

/*grey*/
/* background-image: linear-gradient(rgb(158, 158, 158), rgb(182, 182, 182));
border-top: 1px solid rgb(218, 218, 218);
border-bottom: 1px solid rgb(158, 158, 158); */
/*orange*/
/* background-image: linear-gradient(rgb(220, 116, 43), rgb(242, 142, 72));
border-top: 1px solid rgb(215, 112, 37);
border-bottom: 1px solid rgb(245, 142, 72); */
/*green*/
/* background-image: linear-gradient(rgb(95, 156, 52), rgb(119, 194, 66));
border-top: solid 1px rgb(136, 222, 77);
border-bottom: solid 2px rgb(95, 156, 52); */
/*red*/
/* background-image: linear-gradient(rgb(220, 20, 60), rgb(139, 0, 0));
border-top: 1px solid rgb(205, 92, 92);
font-weight: 500; */
/*yellow*/
/* background-image: linear-gradient(rgb(205, 166, 56), rgb(228, 188, 62));
border-top: 1px solid rgb(240, 211, 128);
border-bottom: 1px solid rgb(205, 166, 56); */
