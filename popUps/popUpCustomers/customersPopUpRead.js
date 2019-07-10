var id = window.opener.document.getElementById('productOpened').innerHTML;
console.log(id);

document.getElementById('customerID').value = id;
console.log(document.getElementById('customerID').value);

var search = {
  id: id
};

$.ajax({
  type: 'POST',
  url: 'getCustomerInfo.php',
  data: search,
  success: function(response){
    console.log(response);


    //var table = document.getElementById('table');
    var response = JSON.parse(response);
    // if(response.error == 'Invalid Query'){
  	// 	console.log('INVALID QUERY');
  	// }else if(response.error == 'No results found.'){
  	// 	//table.innerHTML = response.error;
  	// }
    //else{
    if(response.error == 'None'){
  		 var data = JSON.parse(response.data)[0];

  		console.log(data);

      document.getElementById('codeDisplay').innerHTML = data.firstname + ' ' + data.lastname;
      document.getElementById('dateCreated').innerHTML = data.date_created;
      document.getElementById('dateModified').innerHTML = data.date_modified;
      document.getElementById('firstName').value = data.firstname;
      document.getElementById('lastName').value = data.lastname;
      document.getElementById('company').value = data.company;
      for(var i = 0; i < 4; i++){
        if(document.getElementById('discount').options[i].value == data.discount){ //not too sure bout this one
          document.getElementById('discount').selectedIndex = i;
        }
      }
      document.getElementById('phone1').value = data.phone1;
      document.getElementById('phone2').value = data.phone2;
      document.getElementById('phone3').value = data.phone3;

      console.log(data.mainphone);
      var mainphone = data.mainphone.replace(/-|\(|\)| /g, '');
      var phone1 = data.phone1.replace(/-|\(|\)| /g, '');
      var phone2 = data.phone2.replace(/-|\(|\)| /g, '');
      var phone3 = data.phone3.replace(/-|\(|\)| /g, '');
      console.log(mainphone);
      console.log(phone2);
      // var x ='514-(912) - (1220)';
      // x = x.replace(/-|\(|\)| /g, '');
      // x = x.trim();
      // console.log(x);

      if(mainphone == phone1){
        document.getElementById('1').click();
      }else if(mainphone == phone2){
        document.getElementById('2').click();
      }else if(mainphone == phone3){
        document.getElementById('3').click();
      }

      document.getElementById('emailBox').value = data.email;
      document.getElementById('websiteBox').value = data.website;

      document.getElementById('line1').value = data.address1;
      document.getElementById('line2').value = data.address2;

      document.getElementById('cityI').value = data.city;
      document.getElementById('provinceI').value = data.province;
      document.getElementById('countryI').value = data.country;
      document.getElementById('postalCodeI').value = data.postalcode;

      document.getElementById('noteText').innerHTML = data.notes;

   }
  }
});
