
var genres = ['Alternatif', 'Punk', 'Metal', 'Instrumentale',
              'Enfants', 'Rock', 'Psych/Prog', 'Jazz', 'Blues',
            'Classique', 'Folk', 'Country', 'Pop', 'Experimentale',
            'Ambient', 'Electronique', 'Spoken Word', 'Humour',
            'Library', 'Bandes Sonores', 'Monde', 'Disco', 'Funk/Soul',
            'Reggae', 'Rap', ''];

var conditions = ['', 'NM', 'VG+', 'VG', 'VG-', 'G'];

var invTotal;
var invFloor;
var invReserved;
var invBasement;
var invCCustomers;
var invCStock;

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

// function orderColProducts(col){
//   switch(col){
//     case 'Code':
//       return 'id';
//     case 'Description':
//       return 'description';
//     case 'Price':
//       return 'sell';
//     case 'Inventory':
//       return 'inv_floor'; //here i could do ORDER BY total, inv_floor (but need to add total col)
//     case 'Genre':
//       return 'class';
//     case 'Filed Under':
//       return 'fileunder';
//     case 'Condition':
//       return 'vcond';
//     case 'Label':
//       return 'family';
//   }
// }

//orderCol = orderColProducts;

////////////////INVENTORY DROP DOWN///////////////////////////////////////////////////////
// $('body').on('click', ':not(.rowDot, .available, .dropdownArrow, .col4)', function(e){
//   e.preventDefault();
//   console.log(this.parentNode);
//   $('.invDropdown').remove();
//   $('.dropdownTriangle').remove();
//
// });


var pastInvDropped;
$(document.body).on('click', '.col4', function(e){
  e.preventDefault();

  if(previousdbSelected != 'Products') return;
  $('.invDropdown').remove();
  $('.dropdownTriangle').remove();


  if(pastInvDropped != this){ //if inventory dropdown is not dropped, drop it.
    var drop = document.getElementById('inventoryDropdownHTML').innerHTML;
    var currentInner = $(this).html();
    $(this).html(currentInner + drop);
    var id = $(this).parent()[0].id;

    var el = this;

    //$(this).find('.numTotal').html(1);
    //console.log($(this).parent()[0].id);
    var preview = {
      id: id,
      database: 'Products'
    };
    $.ajax({
      type: 'POST',
      url: 'preview.php',
      data: preview,
      success: function(response){

        response = JSON.parse(response)[0];
      //  console.log(response);
        var t = (response.inv_floor == undefined || response.inv_basement == undefined) ? 0: (parseInt(response.inv_floor) + parseInt(response.inv_basement));
        var f = (response.inv_floor == undefined) ? 0: response.inv_floor;
        var b = (response.inv_basement == undefined) ? 0: response.inv_basement;
        var r = (response.reserved == undefined) ? 0: response.reserved;
        var cs = (response.inv_cstock == undefined) ? 0: response.inv_cstock;
        var cc = (response.inv_ccustomers == undefined) ? 0: response.inv_ccustomers;
        console.log(f);
        $(el).find('.numTotal').html(t);
        $(el).find('.numFloor').html(f);
        $(el).find('.numBasement').html(b);
        $(el).find('.numReserved').html(r);
        $(el).find('.numCCustomers').html(cc);
        $(el).find('.numCStock').html(cs);

        if(t > 0){
          $(el).find('.totalDot')[0].style.backgroundColor = 'rgb(119, 194, 66)';
        }else if(t < 0){
          $(el).find('.totalDot')[0].style.backgroundColor = 'red';
        }
        if(f > 0){
          $(el).find('.availableDot')[0].style.backgroundColor = 'rgb(119, 194, 66)';
        }else if(f<0){
          $(el).find('.availableDot')[0].style.backgroundColor = 'red';
        }
        if(b > 0){
          $(el).find('.warehouseDot')[0].style.backgroundColor = 'rgb(0, 0, 153)';
        }else if(b < 0){
          $(el).find('.warehouseDot')[0].style.backgroundColor = 'red';
        }
        if(r > 0){
          $(el).find('.reservedDot')[0].style.backgroundColor = 'orange';
        }else if(r < 0){
          $(el).find('.reservedDot')[0].style.backgroundColor = 'red';
        }
        if(cs > 0){
          $(el).find('.ccstockDot')[0].style.backgroundColor = 'yellow';
        }else if(cs < 0){
          $(el).find('.ccstockDot')[0].style.backgroundColor = 'red';
        }
        if(cc > 0){
          $(el).find('.ccustomersDot')[0].style.backgroundColor = 'yellow';
        }else if(cs < 0){
          $(el).find('.ccustomersDot')[0].style.backgroundColor = 'red';
        }
        // if(avail > 0 && parseInt(row.inv_floor)<= 0){
        //   $(newRowElement).find('.rowDot')[0].style.backgroundColor = 'rgb(0, 0, 153)';
        // }else if(avail > 0){
        //   $(el).find('.rowDot')[0].style.backgroundColor = 'rgb(119, 194, 66)';
        // }else if(avail < 0){
        //   $(newRowElement).find('.rowDot')[0].style.backgroundColor = 'red';
        // }
      }
    });

    //$(this).find('d')
    // $(this).find('.invDropdown').show();
    // $(this).find('.dropdownTriangle').show();
    pastInvDropped = this;
  }else{
    pastInvDropped = undefined;
  }
});

// $(document.body).on('scroll', '#container', function(e){
//   e.preventDefault();
//
// });
