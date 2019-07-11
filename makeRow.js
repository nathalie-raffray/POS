function makeProductRow(row){
  var dataTable = document.getElementById('tableheader');
  var newRow = document.createElement('tr');
  newRow.className = 'row';

  // if row.id=1, then code=00000001
  var code = row.id;

  for(var i=code.length; i<8; i++){
    code = '0' + code;
  }

  if(row.type == 3){
    newRow.id = 'CD'+code;
  } else if(row.type == 1){
    newRow.id = 'LP'+code;
  }

  var rowElementsHTML = [];

  rowElementsHTML=[newRow.id,                   //product code
              row.description,  //description
              '$'+row.sell,             //price
              document.getElementById('inventoryHTML').innerHTML, //inventory
              row.class,             //genre
              row.fileunder,                    //file under
              row.vcond+'/'+row.scond, //condition
              row.family                  //label
            ];

  var avail = parseInt(row.inv_floor);

  for(var i=1; i<9; i++){
    var newRowElement = document.createElement('td');
    newRowElement.className = 'col' + i;
    newRowElement.innerHTML = rowElementsHTML[i-1];
    if(i!= 4){
      newRowElement.className += ' dblclickable';
    }

    if(i==4){
      //console.log($(newRowElement).find('.dot')[0]);
      $(newRowElement).find('.available').html(avail + ' Available');
      if(avail > 0 && parseInt(row.inv_floor)<= 0){
        $(newRowElement).find('.dot')[0].style.backgroundColor = 'rgb(0, 0, 153)';
      }else if(avail > 0){
        $(newRowElement).find('.dot')[0].style.backgroundColor = 'rgb(119, 194, 66)';
      }else if(avail < 0){
        $(newRowElement).find('.dot')[0].style.backgroundColor = 'red';
      }
    }
    //console.log(newRowElement);
    newRow.appendChild(newRowElement);
  }
  dataTable.appendChild(newRow);

}

makeRow = makeProductRow; //this is the default, aka. when the page is refreshed and goes back to the product page

function makeCustomerRow(row){
  var dataTable = document.getElementById('tableheader');
  var newRow = document.createElement('tr');
  newRow.className = 'row';

  // if row.id=1, then code=00000001
  var code = row.id;
  var phone;
  newRow.id = code; //change this depending...

  // if(row.mainphone == 1){
  //   phone = row.phone1;
  // }else if(row.mainphone == 2){
  //   phone = row.phone2;
  // }else if(row.mainphone == 3){
  //   phone = row.phone3;
  // }

  var rowElementsHTML = [];

  rowElementsHTML=[newRow.id,                   //customer code
              row.firstname + ' ' + row.lastname,  //name
              row.mainphone,             //phone
              row.email, //email
              row.points,             //points
              row.discount,                    //discount
              row.postalcode, //postal code
              row.city                  //city
            ];

  for(var i=1; i<9; i++){
    var newRowElement = document.createElement('td');
    newRowElement.className = 'col' + i;
    newRowElement.className += ' dblclickable';
    newRowElement.innerHTML = rowElementsHTML[i-1];

    newRow.appendChild(newRowElement);
  }
  dataTable.appendChild(newRow);
}
