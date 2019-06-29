
var arrowButtons = document.getElementsByClassName('headerbutton');
//console.log(arrowButtons);

for(var i = 0; i < arrowButtons.length; i++)
{
  arrowButtons[i].addEventListener('mousedown', function(e){
    this.style.backgroundColor = '#c0c0c0';
  });
  arrowButtons[i].addEventListener('click', function(e){

    this.style.backgroundColor = '#f0f0f0';
    if(this.children[1].innerHTML == ''){

      var arrows = $('.updown');
      for(var i = 0; i<arrows.length; i++){
        arrows[i].innerHTML = '';
      }
      console.log(this.children[0].innerHTML);
      this.children[1].innerHTML = '\u2193'; //down arrow
      ascdesc = 'ASC'
    }
    else if(this.children[1].innerHTML == '\u2193'){ //down arrow
      this.children[1].innerHTML = '\u2191';    //up arrow
      ascdesc = 'DESC'
      //ADD FUNCTIONALITY HERE
    }
    else{
      this.children[1].innerHTML = '\u2193';    //down arrow
      ascdesc = 'ASC';
    }
    orderby = orderCol(this.children[0].innerHTML);
    reOrder();
    //console.log(orderby);
  });
}

function reOrder(){
  rowsDisplayed = 0;
  pageNumber = 0;
  if(queryOrSearch == true){
    search.orderby = orderby;
    search.ascdesc = ascdesc;
    $.ajax({
      type: 'POST',
      url: searchUrl,
      data: search,
      success: function(response){
        $('.row').remove();
        if(noErrors(response)){
          //console.log(makeRow);
          displayResults(response, makeRow);
        }
       }
    });
  }else if(queryOrSearch == false){
    var smartSearch = {
      query: query,
      orderby: orderby,
      ascdesc: ascdesc
    };
    // smartSearch.orderby = orderby;
    // smartSearch.ascdesc = ascdesc;
    $.ajax({
      type: 'POST',
      url: smartFindUrl,
      data: smartSearch,
      success: function(response){
        $('.row').remove();
        if(noErrors(response)){
          displayResults(response, makeRow);
        }
       }
    });
  }
}
