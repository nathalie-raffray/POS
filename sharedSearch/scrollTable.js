//VARIABLES DECLARED IN SEARCH.JS

// var rowsDisplayed;
// var numRowsToCreate;
// var makeRow; //this will hold one of the functions: makeProductRows, makeCustomerRows, makeOrderRows, etc.

var currentNumRows;
$('#scrollTable').scroll(function() {

  let div = $(this).get(0);
  if(div.scrollTop + div.clientHeight >= div.scrollHeight) {
      // do the lazy loading here
      //console.log('scrolling');
      console.log("results.length: " + results.length);
      console.log("rowsDisplayed: " + rowsDisplayed);
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
