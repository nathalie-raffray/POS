
var genres = ['Alternatif', 'Punk', 'Metal', 'Instrumentale',
              'Enfants', 'Rock', 'Psych/Prog', 'Jazz', 'Blues',
            'Classique', 'Folk', 'Country', 'Pop', 'Experimentale',
            'Ambient', 'Electronique', 'Spoken Word', 'Humour',
            'Library', 'Bandes Sonores', 'Monde', 'Disco', 'Funk/Soul',
            'Reggae', 'Rap', ''];

var conditions = ['', 'NM', 'VG+', 'VG', 'VG-', 'G'];

//var results; --> declared in search.js
//var rowsDisplayed; --> declared in search.js
//var numRowsToCreate; --> declared in search.js
// var input; --> declared in search.js
// var filterSearch; --> declared in search.js
// var searchIndex; --> declared in search.js
// var count; --> declared in search.js
// var offset; --> declared in search.js
// var pageNumber; --> declared in search.js
// var search; --> declared in search.js
// var results; --> declared in search.js
// var orderby; --> declared in search.js
// var ascdesc; --> declared in search.js
//var queryOrSearch; //false if last call to server was done by smart find, true if done by search bar


// var arrowButtons = document.getElementsByClassName('headerbutton');
// //console.log(arrowButtons);
//
// for(var i = 0; i < arrowButtons.length; i++)
// {
//   arrowButtons[i].addEventListener('mousedown', function(e){
//     this.style.backgroundColor = '#c0c0c0';
//   });
//   arrowButtons[i].addEventListener('click', function(e){
//
//     this.style.backgroundColor = '#f0f0f0';
//     if(this.children[1].innerHTML == ''){
//
//       var arrows = $('.updown');
//       for(var i = 0; i<arrows.length; i++){
//         arrows[i].innerHTML = '';
//       }
//       console.log(this.children[0].innerHTML);
//       this.children[1].innerHTML = '\u2193'; //down arrow
//       ascdesc = 'DESC'
//     }
//     else if(this.children[1].innerHTML == '\u2193'){ //down arrow
//       this.children[1].innerHTML = '\u2191';    //up arrow
//       ascdesc = 'ASC'
//       //ADD FUNCTIONALITY HERE
//     }
//     else{
//       this.children[1].innerHTML = '\u2193';    //down arrow
//       ascdesc = 'DESC';
//     }
//     orderby = orderColProducts(this.children[0].innerHTML);
//     reOrder();
//     //console.log(orderby);
//
//   });
// }
///NEED TO MAKE QUERYORSEARCH, SEARCH, QUERY UNDEFINED
// function reOrder(){
//   rowsDisplayed = 0;
//   pageNumber = 0;
//   if(queryOrSearch == true){
//     search.orderby = orderby;
//     search.ascdesc = ascdesc;
//     $.ajax({
//       type: 'POST',
//       url: 'Products/searchProducts.php',
//       data: search,
//       success: function(response){
//         displayProductResults(response);
//        }
//     });
//   }else if(queryOrSearch == false){
//     var smartSearch = {
//       query: query,
//       orderby: orderby,
//       ascdesc: ascdesc
//     };
//     smartSearch.orderby = orderby;
//     smartSearch.ascdesc = ascdesc;
//     $.ajax({
//       type: 'POST',
//       url: 'backend/smartFind/smartFindProducts.php',
//       data: smartSearch,
//       success: function(response){
//         displayProductResults(response);
//        }
//     });
//   }
// }

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

orderCol = orderColProducts;

function invDropDown(){
  console.log('ho');
  document.getElementById('dropdown-content').style.display = 'block';
}
