function makeRow(row){
  var dataTable = document.getElementById('table');
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

  // SELECT id, type, description, sell, qty,
  //                    class, fileunder, vcond, scond, family

  rowElementsHTML=[newRow.id,                   //product code
              row.description,  //description
              '$'+row.sell,             //price
              row.qty+' Available', //inventory
              row.class,             //genre
              row.fileunder,                    //file under
              row.vcond+'/'+row.scond, //condition
              row.family                  //label
            ];

  for(var i=1; i<9; i++){
    var newRowElement = document.createElement('td');
    newRowElement.className = 'col' + i;
    newRowElement.innerHTML = rowElementsHTML[i-1];

    newRow.appendChild(newRowElement);
  }
  dataTable.appendChild(newRow);

}
