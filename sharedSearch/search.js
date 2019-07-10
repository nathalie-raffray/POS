var results;
var rowsDisplayed;
var numRowsToCreate;
var orderby = '';
var ascdesc = '';
var input;
var filterSearch;
var searchIndex;
var searchUrl = 'Products/searchProducts.php';
var smartFindUrl = 'Products/smartFindProducts/smartFindProducts.php';
//by default, they hold the Product urls
var count;
var offset;
var pageNumber;
var search; //this is used to save a regular search POST object for AJAX
var query; // this is used to save a smart find POST object for AJAX
var queryOrSearch; //false if last call to server was done by smart find, true if done by search bar
var makeRow; //this will hold one of the functions: makeProductRow, makeCustomerRow, makeOrderRow, etc.
var orderCol; //this will hold one of the functions: orderColProducts, orderColCustomers, orderColOrders, etc.
//by default makeRow = makeProductRows and orderCol = orderColProducts because when LS is refreshed, it is on the Product page
//makeRow = makeProductRows; is declared under makeProductRows() in makeRows.js
//orderCol = orderColProducts; is declared under orderColProducts() in makeRows.js


document.getElementById('searchForm').addEventListener('submit', function(e){
  //var dbSelected = document.getElementById('db_Selected').innerHTML;
  e.preventDefault();
  queryOrSearch = true;

  var dbArray = [];
  if(previousdbSelected == 'Products'){
    if(document.getElementById('ln').checked) dbArray.push('ln');
    if(document.getElementById('lp').checked) dbArray.push('lp');
    if(document.getElementById('cd').checked) dbArray.push('cd');
    console.log(dbArray);
  }

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
    search = {
      entered: input,
      filter: filterSearch,
      searchIndex: searchIndex,
      database: dbArray,
      offset: 0,
      count: 1000,
      orderby: orderby,
      ascdesc: ascdesc
    };

    // switch(dbSelected){
    //   case "Products":
    //     url = 'Products/searchProducts.php';
    //     //makeRow = makeProductRow;
    //     break;
    //   case "Customers":
    //     url = 'Customers/searchCustomers.php';
    //     //makeRow = makeCustomerRow;
    //     break;
    //   case "Orders":
    //     break;
    // }
    $.ajax({
      type: 'POST',
      url: searchUrl,
      data: search,
      success: function(response){
        console.log(response);
        $('.row').remove();
        if(noErrors(response)){
          displayResults(response, makeRow);
        }
       }
    });
  }

});

function noErrors(response){
  //console.log(response);
  var table = document.getElementById('tableheader');
  var regex = RegExp('Allowed memory size of');

  if(regex.test(response)){ //for fatal PHP error where too many results were requested
    table.innerHTML = 'Please make your query more precise.';
    return false;
  }

  response = JSON.parse(response);
  if(response.error == 'None'){
    return true;
  }
  else if(response.error == 'No results found.'){
    // table.innerHTML = response.error;
  }
  else if(response.error == 'Invalid Query.'){
    console.log('INVALID QUERY');
  }
  else if(response.error == 'Please enter a valid product code.'){
    // table.innerHTML = response.error;
  }
  return false;
}

function displayResults(response, makeRow){
  response = JSON.parse(response);
  //When receiving data from a web server, the data is always a string.
  //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
  response.data = JSON.parse(response.data);
  results = response.data;
  //console.log(response);

  //CHECK FOR ERRORS
  //console.log(results[0].id);

  if(results.length > 50){
    numRowsToCreate = 50;
    rowsDisplayed += 50;
  }else{
    numRowsToCreate = results.length;
    rowsDisplayed += results.length;
  }
  for(var i=0; i<numRowsToCreate; i++){
   makeRow(results[i]);
  }
}
