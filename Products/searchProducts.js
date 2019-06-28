
var genres = ['Alternatif', 'Punk', 'Metal', 'Instrumentale',
              'Enfants', 'Rock', 'Psych/Prog', 'Jazz', 'Blues',
            'Classique', 'Folk', 'Country', 'Pop', 'Experimentale',
            'Ambient', 'Electronique', 'Spoken Word', 'Humour',
            'Library', 'Bandes Sonores', 'Monde', 'Disco', 'Funk/Soul',
            'Reggae', 'Rap', ''];

var conditions = ['', 'NM', 'VG+', 'VG', 'VG-', 'G'];

var results;
var rowsDisplayed;
var numRowsToCreate;
var input;
var filterSearch;
var searchIndex;
var count;
var offset;
var pageNumber;
var search;
// var orderby = ''; DECLARED IN SMARTFINDPRODUCTS
// var ascdesc = '';
//var queryOrSearch; //false if last call to server was done by smart find, true if done by search bar


var arrowButtons = document.getElementsByClassName('headerbutton');

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
      ascdesc = 'DESC'
    }
    else if(this.children[1].innerHTML == '\u2193'){ //down arrow
      this.children[1].innerHTML = '\u2191';    //up arrow
      ascdesc = 'ASC'
      //ADD FUNCTIONALITY HERE
    }
    else{
      this.children[1].innerHTML = '\u2193';    //down arrow
      ascdesc = 'DESC';
    }
    orderby = orderColProducts(this.children[0].innerHTML);
    reOrder();
    //console.log(orderby);

  });
}
///NEED TO MAKE QUERYORSEARCH, SEARCH, QUERY UNDEFINED
function reOrder(){
  if(queryOrSearch == true){
    search.orderby = orderby;
    search.ascdesc = ascdesc;
    $.ajax({
      type: 'POST',
      url: 'Products/searchProducts.php',
      data: search,
      success: function(response){
        displayProductResults(response);
       }
    });
  }else if(queryOrSearch == false){
    var smartSearch = {
      query: query,
      orderby: orderby,
      ascdesc: ascdesc
    };
    smartSearch.orderby = orderby;
    smartSearch.ascdesc = ascdesc;
    $.ajax({
      type: 'POST',
      url: 'backend/smartFind/smartFindProducts.php',
      data: smartSearch,
      success: function(response){
        displayProductResults(response);
       }
    });
  }

  // search = {
  //   entered: input,
  //   filter: filterSearch,
  //   searchIndex: searchIndex,
  //   offset: 0,
  //   count: 1000,
  //   orderby: orderby,
  //   ascdesc: ascdesc
  // };


}

function orderColProducts(col){
  switch(col){
    case 'Code':
      return 'id';
    case 'Description':
      return 'description';
    case 'Price':
      return 'sell';
    case 'Inventory':
      return 'inv_floor'; //here i could do ORDER BY total, inv_floor (but need to add total col)
    case 'Genre':
      return 'class';
    case 'Filed Under':
      return 'fileunder';
    case 'Condition':
      return 'vcond';
    case 'Label':
      return 'family';
  }
}

function displayProductResults(response){
  $('.row').remove();
  console.log(response);
  var table = document.getElementById('table');
  var regex = RegExp('Allowed memory size of');
//  console.log(table);
  //console.log(regex.test(response));
  response = JSON.parse(response);
  if(regex.test(response)){
    table.innerHTML = 'Please make your query more precise.';
    return;
  }

  if(response.error == 'No results found.'){
    table.innerHTML = response.error;

  }
  else if(response.error == 'Invalid Query.'){
    console.log('INVALID QUERY');
  }
  else if(response.error == 'Please enter a valid product code.'){
    table.innerHTML = response.error;
  }
  else if(response.error == 'None'){
    //When receiving data from a web server, the data is always a string.
    //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    response.data = JSON.parse(response.data);
    results = response.data;
    //console.log(response);

    //CHECK FOR ERRORS
    console.log(results[0].id);

    if(results.length > 50){
      numRowsToCreate = 50;
      rowsDisplayed += 50;
    }else{
      numRowsToCreate = results.length;
      rowsDisplayed += results.length;
    }
    for(var i =0; i<numRowsToCreate; i++){
     makeRow(results[i]);
    }
  }
}

document.getElementById('searchForm').addEventListener('submit', function(e){
  e.preventDefault();
  queryOrSearch = true;
  //The preventDefault() method cancels the event if it is cancelable, meaning
  //that the default action that belongs to the event will not occur.
  //preventDefault useful for when:
  /*
  Clicking on a "Submit" button, prevent it from submitting a form
  Clicking on a link, prevent the link from following the URL
  */
  input = document.getElementById('input-box').value;
  filterSearch = document.getElementById('filter').value;
  searchIndex = document.getElementById('searchIndex').value;
  //var js;
  rowsDisplayed = 0;
  pageNumber = 0;
//  numRowsToCreate;

  if(input !== ''){
    // console.log(filter);

    search = {
      entered: input,
      filter: filterSearch,
      searchIndex: searchIndex,
      offset: 0,
      count: 1000,
      orderby: orderby,
      ascdesc: ascdesc
    };

    $.ajax({
      type: 'POST',
      url: 'Products/searchProducts.php',
      data: search,
      success: function(response){
        displayProductResults(response);
       }
    });

//// AJAX IN CLASSIC JAVASCRIPT
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'process.php?entered='+input+'&filter='+filter+'&searchIndex='+searchIndex+'&offset=0&count=1000', true);
    //
    // xhr.onload=function(){
    //   if(this.responseText == 'query failed1'){
    //     console.log('error');
    //   }else if(this.responseText == 'query failed2'){
    //     console.log('0 rows returned');
    //   }
    //   else{
    //     $('.row').remove();
    //     try{
    //       json = JSON.parse(this.responseText);
    //       console.log(json.length);
    //       if(json.length > 50){
    //         numRowsToCreate = 50;
    //         rowsDisplayed += 50;
    //       }else{
    //         numRowsToCreate = json.length;
    //         rowsDisplayed += json.length;
    //       }
    //       for(var i =0; i<numRowsToCreate; i++){
    //        makeRow(json[i]);
    //      }
    //     }
    //     catch(e){
    //       console.log('NOT JSON ERROR: ' + e);
    //       console.log('\n Response test: '+this.responseText);
    //     }
    //   }
    // }
    // xhr.send();
  }

});

var currentNumRows;

$('#container').scroll(function() {
  let div = $(this).get(0);
  if(div.scrollTop + div.clientHeight >= div.scrollHeight) {
      // do the lazy loading here
      //console.log('scrolling');
      if(results.length > rowsDisplayed){
        console.log('hoeme on out');
        currentNumRows = rowsDisplayed;
        if(results.length - rowsDisplayed >= 50){
          numRowsToCreate = 50;
          rowsDisplayed += 50;
        }else{
          numRowsToCreate = results.length-rowsDisplayed;
          rowsDisplayed += results.length-rowsDisplayed;
        }
        for(var i =currentNumRows-1; i<(currentNumRows+numRowsToCreate); i++){
         makeRow(results[i]);
       }


     // }else if(results.length == rowsDisplayed && results.length == 1000){ //SOmeting WRONG
     //    offset = 1000+1000*pageNumber;
     //    count = 1000;
     //    pageNumber++;
     //
     //    search.offset = offset;
     //    search.count = count;
     //    console.log(search);
     //    $.ajax({
     //      type: 'POST',
     //      url: 'backend/searchDB/searchProducts.php',
     //      data: search,
     //      success: function(response){
     //        response = JSON.parse(response);
     //        results = JSON.parse(response.data);
     //
     //        if(results.length == 0){
     //          //NO MORE RESULTS
     //          return;
     //        }
     //
     //        if(results.length > 50){
     //          numRowsToCreate = 50;
     //          rowsDisplayed = 50;
     //        }else{
     //          numRowsToCreate = results.length;
     //          rowsDisplayed = results.length;
     //        }
     //
     //        for(var i =0; i<numRowsToCreate; i++){
     //         makeRow(results[i]);
     //       }
     //
     //
     //

      }
  }
});

//////////makeRow(row) is added here/////////
