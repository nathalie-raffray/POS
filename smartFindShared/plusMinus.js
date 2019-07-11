
$(document.body).on('click', '.content .plus', function(e){
  e.preventDefault();
  var row = this.parentElement.parentElement;

  if(previousdbSelected == 'Products'){
    var newRow = document.querySelector('#customProductSmartFindRow').cloneNode(true);
  }else if(previousdbSelected == 'Customers'){
    var newRow = document.querySelector('#customCustomerSmartFindRow').cloneNode(true);
  }

  // newRow.createAttribute('class');
  newRow.removeAttribute('id');
  if(row.id == 'quantifier2'){
    newRow.className = 'under2';
  }else if(row.id == 'quantifier1'){
    newRow.className = 'under1';
  }else{
    newRow.className = row.className;
  }

  newRow.style.display = 'inline-block';
  //console.log(newRow);
  // console.log(newRow);
  row.parentNode.insertBefore(newRow, row.nextSibling);

});

$(document.body).on('click', '.content .minus', function(e){
  e.preventDefault();
  var row = this.parentElement.parentElement;
  row.remove();
});
