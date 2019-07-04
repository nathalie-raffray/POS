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
      // var code = data.id;
      //
  		// if(data.type == 1){
  		// 	code = 'LP' + code;
  		// }else if(data.type == 2){
  		// 	code = 'LN' + code;
  		// }else if(data.type == 3){
  		// 	code = 'CD' + code;
  		// }

      document.getElementById('codeDisplay').innerHTML = data.name;
      document.getElementById('dateCreated').innerHTML = data.date_created;
      document.getElementById('dateModified').innerHTML = data.date_modified;
    //  document.getElementById('firstName').value = ;
    //  document.getElementById('lastName').value = ;
      document.getElementById('company').value = data.company;
      for(var i = 0; i < 4; i++){
        if(document.getElementById('discount').options[i].value == data.category){ //not too sure bout this one
          document.getElementById('discount').selectedIndex = i;
        }
      }
      document.getElementById('phone1').value = data.phone1;
      document.getElementById('phone2').value = data.phone2;
      document.getElementById('phone3').value = data.phone3;

      

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
