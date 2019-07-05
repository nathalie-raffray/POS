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

      document.getElementById('codeDisplay').innerHTML = data.name;
      document.getElementById('dateCreated').innerHTML = data.date_created;
      document.getElementById('dateModified').innerHTML = data.date_modified;
      document.getElementById('firstName').value = data.firstname;
      document.getElementById('lastName').value = data.lastname;
      document.getElementById('company').value = data.company;
      for(var i = 0; i < 4; i++){
        if(document.getElementById('discount').options[i].value == data.category){ //not too sure bout this one
          document.getElementById('discount').selectedIndex = i;
        }
      }
      document.getElementById('phone1').value = data.phone1;
      document.getElementById('phone2').value = data.phone2;
      document.getElementById('phone3').value = data.phone3;

      if(data.mainphone == 1){
        document.getElementById('firstButton').click();
      }else if(data.mainphone == 2){
        document.getElementById('secondButton').click();
      }else if(data.mainphone == 3){
        document.getElementById('thirdButton').click();
      }

      document.getElementById('emailBox').value = data.email;
      document.getElementById('websiteBox').value = data.website;

      document.getElementById('line1').value = data.address1;
      document.getElementById('line2').value = data.address2;

      document.getElementById('cityI').value = data.city;
      document.getElementById('provinceI').value = data.province;
      document.getElementById('countryI').value = data.country;
      document.getElementById('postalCodeI').value = data.postalcode;

   }
 }
});
