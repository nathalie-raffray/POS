
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

document.getElementById('searchForm').addEventListener('submit', function(e){
  e.preventDefault();
  //The preventDefault() method cancels the event if it is cancelable, meaning
  //that the default action that belongs to the event will not occur.
  //preventDefault useful for when:
  /*
  Clicking on a "Submit" button, prevent it from submitting a form
  Clicking on a link, prevent the link from following the URL
  */
  input = document.getElementById('input-box').value;
  filterSearch = document.getElementsByClassName('filter')[0].value;
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
      count: 1000
    };

    $.ajax({
      type: 'POST',
      url: 'backend/searchDB/searchProducts.php',
      data: search,
      success: function(response){
        $('.row').remove();
        console.log(response);
        var table = document.getElementById('table');
        var regex = RegExp('Allowed memory size of');

        console.log(regex.test(response));
        if(regex.test(response)){
          table.innerHTML = 'Please make your query more precise.';
          return;
        }

        //When receiving data from a web server, the data is always a string.
        //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        response = JSON.parse(response);

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
    });

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

// function makeRow(row){
//   var dataTable = document.getElementById('table');
//   var newRow = document.createElement('tr');
//   newRow.className = 'row';
//
//   // if row.id=1, then code=00000001
//   var code = row.id;
//
//   for(var i=code.length; i<8; i++){
//     code = '0' + code;
//   }
//
//   if(row.type == 3){
//     newRow.id = 'CD'+code;
//   } else if(row.type == 1){
//     newRow.id = 'LP'+code;
//   }
//
//   var rowElementsHTML = [];
//
//   // SELECT id, type, description, sell, qty,
//   //                    class, fileunder, vcond, scond, family
//
//   rowElementsHTML=[newRow.id,                   //product code
//               row.description,  //description
//               '$'+row.sell,             //price
//               row.qty+' Available', //inventory
//               row.class,             //genre
//               row.fileunder,                    //file under
//               row.vcond+'/'+row.scond, //condition
//               row.family                  //label
//             ];
//
//   for(var i=1; i<9; i++){
//     var newRowElement = document.createElement('td');
//     newRowElement.className = 'col' + i;
//     newRowElement.innerHTML = rowElementsHTML[i-1];
//
//     newRow.appendChild(newRowElement);
//   }
//   dataTable.appendChild(newRow);
//
// }
