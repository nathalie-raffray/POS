





search = {
  id: id
};

$.ajax({
  type: 'POST',
  url: './getProductInfo.php',
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
        document.getElementById('upc').value = data.upc;
  			document.getElementById('pressInfo').value = data.pressinfo;
  			document.getElementById('country').readOnly=true;
  			document.getElementById('catalogueNo').readOnly=true;
  			document.getElementById('altCatalogueNo').readOnly=true;
  			document.getElementById('vinylCon').readOnly=true;
  			document.getElementById('sleeveCon').readOnly=true;
  		//	document.getElementById('extraInfo').value = json[0][14];

  		}

      if(data.type == 3){ //FOR CDs
        document.getElementById('upc').readOnly = true;;
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



   }
 }
});
