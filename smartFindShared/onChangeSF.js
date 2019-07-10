$(document.body).on('change', '#smartFindRows .firstFilter', function(){ //this is for when the value is changed of <select> of Product Code/Description/Artist/Album

  var secondFilterOnElement = this.parentElement.children[1];
  var filterPapa = document.getElementById('customProductSmartFindSelect');

  var secondFilter1 = filterPapa.childNodes[0].cloneNode(true);
  var secondFilter2 = filterPapa.childNodes[1].cloneNode(true);

  secondFilterOnElement.remove();
  var value = this.options[this.selectedIndex].value;

  if(value == 'Product Code' || value == 'Price' || value == 'Quantity' || value == 'points'){
    this.parentNode.insertBefore(secondFilter2, this.nextSibling); // == insertAfter(this, secondFilter2). In reality insertAfter does not exist
  }else{
    this.parentNode.insertBefore(secondFilter1, this.nextSibling);
  }

});
