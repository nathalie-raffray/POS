/////////////////////////FOR REFERENCE////////////////////////////////////////////////////
/*
  Mousestop plugin: http://mousestop.websanova.com/
  Synchronous events: https://stackoverflow.com/questions/30444466/key-pressed-and-click-in-the-same-time


*/

///////////////////////////////////


///////////////////////////GRABBING ELEMENTS ON THE PAGE/////////////////////////////////
var body = document.getElementById('container');
var dataTable = document.getElementById('table');

//var containerHeaders = document.getElementsByClassName('main-bar-element');
var containerHeaders = document.getElementsByClassName('header');

var mainBar = document.getElementById('main-bar');

var rows = document.getElementsByClassName('row');

var numRows = rows.length;
var numCols = containerHeaders.length;

var columns = [];
for(var i = 0; i < numCols; i++)  //making 2D array of columns of the datatable. First index designates column number.
                                  //Second index designates row number. (transpose of a matrix!)
{
  var column = new Array(rows.length);
  for(var j = 0; j < numRows; j++)
  {
    column[j] = rows[j].children[i];

  }
  columns[i] = column;

}

var searchBox = document.getElementById('input-box');
var searchBy = document.getElementById('filter');

var navBar = document.getElementById('nav-options');
var navButtons = navBar.children;


//////////////////////////CUSTOMIZING THE PAGE(eg. functions for adding elements)///////////
// function makeRows(num){
//   var newRow = document.createElement('tr');

//   for(var i=0; i<num; i++){

//     newRow = document.createElement('tr');
//     newRow.className = 'row';


//     for(var j = 1; j < numCols+1; j++){
//       var newRowElement = document.createElement('td');
//       newRowElement.className = 'col' + j;

//       newRow.appendChild(newRowElement);
//     }
//     dataTable.appendChild(newRow);

//   }

// }
//makeRows(30);

// .col1{
//   /*position: relative;*/
//   width:50px;
//   /*background-color: black;
// */}

// .col2{
//   width:75px;
// }
// .col3{
//   width:47px;
// }
// .col4{
//   width:67px;
// }
// .col5{
//   width:52px;
// }
// .col6{
//   width:76px;
// }
// .col7{
//   width:67px;
// }
// .col8{
//   width:50px;
// }


////////////////////////CODE FOR FUCKING MOVING THE BAR LEFT AND RIGHT///////////////////////////
var pressingCtrl = false;
var clickingMouse = false;

function clickAndCtrlPressing(){
  return (pressingCtrl && clickingMouse);
}

var currentPadding;
var startMousePos = 0;
var endMousePos = 0;
var offset;
var newPadding;

function moveBar()
{

  currentPadding = parseInt($(targetColumn).css('padding-right'));
  offset = endMousePos - startMousePos;
  newPadding = currentPadding + offset;

  $(targetColumn).css('padding-right', newPadding);
}

var targetColumn;

$(document).on({
  keydown: function(e){
    if(e.which == 91  || e.which == 17)         //keycode 17 designates the ctrl key
    {
      pressingCtrl = true;
    }
    if(clickAndCtrlPressing())
    {
      document.body.style.cursor = 'col-resize';

      if(e.currentTarget.localName == 'th')   //if what was selected was the header: Code || Description || Price, etc., then
                                              //e.currentTarget.classList = ['colx', 'main-bar-element']
      {
        targetColumn = '.' + e.currentTarget.classList[0];
      }
      else targetColumn = '.' + e.currentTarget.className;
    }
  },
  keyup: function(e){
    if(e.which == 91 || e.which == 17)
    {
      document.body.style.cursor = 'auto';
      pressingCtrl = false;
      targetColumn = undefined;
    }
  }
});

$(document.body).on({

  mousedown: function(e){
    if(e.which == 1)      //if left mouse click
    {
      clickingMouse = true;

      if(clickAndCtrlPressing())
      {
        document.body.style.cursor = 'col-resize';

        startMousePos = e.pageX;

        if(e.currentTarget.localName == 'th')   //if what was selected was the header: Code || Description || Price, etc.
        {
          targetColumn = '.' + e.currentTarget.classList[0];
        }
        else targetColumn = '.' + e.currentTarget.className;
      }
    }
  },
  mouseup: function(e){
    if(e.which == 1)
    {
      document.body.style.cursor = 'auto';
      clickingMouse = false;
      targetColumn = undefined;
    }
  },
  mousemove: function(e)
  {
    if(clickAndCtrlPressing())
    {
      document.body.style.cursor = 'col-resize';

      endMousePos = e.pageX;

      moveBar();

      startMousePos = e.pageX;

    }
  },

  mousestop: function(e)
  {
   //REMINDER THAT I HAVE IMPORTED MOUSESTOP PLUGIN!
  }
}, '.col1, .col2, .col3, .col4, .col5, .col6, .col7, .col8');








///////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////SMART FIND//////////////////////////////////////////////////////////////////
// var default_smartFind;
// var dbSelected = document.getElementById('db_Selected').innerHTML;
// if(dbSelected == 'Products'){
//   //console.log(document.getElementById('customHTML_sfProducts').children);
//   default_smartFind = document.getElementById('customHTML_sfProducts').childNodes[1];
//   console.log(default_smartFind);
// }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";

    //   var div = document.getElementById(`customHTML_sf${dbSelected}`);
    //   console.log(div.childNodes);
    // //  var myNode = document.getElementById("foo");
    //   while (div.firstChild) {
    //       div.removeChild(div.firstChild);
    //   }
    //   div.appendChild(default_smartFind);
    //
    //
    //   console.log(div.childNodes);


    } else {
      content.style.display = "block";
    }
  });
}

///all thats commented out is the code to make smart find go to back to its default, once you click on it

// $('.collapsible').click(function(e){
//   console.log(dbSelected);
//   console.log(document.getElementById(`customHTML_sf${dbSelected}`).innerHTML);
//   console.log($(`#customHTML_sf${dbSelected}`).innerHTML);
// //  customHTML_sfProducts
//   document.getElementById(`customHTML_sf${dbSelected}`).innerHTML = default_smartFind;
// //   div.innerHTML = document.getElementById('blockOfStuff').innerHTML;
// // document.getElementById('targetElement').appendChild(div);
// });


///////////////////////////CLICKING AND DOUBLE CLICKING A ROW//////////////////////////////////////////////
// var invTotal;
// var invFloor;
// var invReserved;
// var invBasement;
// var invCCustomers;
// var invCStock;

var previousRowClicked;
var previousColor;

$(document.body).on('click', '.row', function(){       //when row is clicked, the color of the row changes

  if(previousColor != undefined && previousRowClicked != undefined)
  {
    previousRowClicked.style.backgroundColor = previousColor;
  }

  previousColor = window.getComputedStyle(this).getPropertyValue('background-color');

  this.style.backgroundColor = '#c0c0c0';

  if(previousRowClicked != this){
    console.log($(this).find('.col1').html());
    var id = $(this).find('.col1').html();
    var preview = {
      id: id,
      database: previousdbSelected
    };
    $.ajax({
      type: 'POST',
      url: 'preview.php',
      data: preview,
      success: function(response){
        response = JSON.parse(response)[0];

        if(preview.database == 'Products'){
          // invTotal = (response.inv_floor == undefined || response.inv_basement == undefined) ? 0: (parseInt(response.inv_floor) + parseInt(response.inv_basement));
          // invFloor = (response.inv_floor == undefined) ? 0: response.inv_floor;
          // invBasement = (response.inv_basement == undefined) ? 0: response.inv_basement;
          // invCStock = (response.inv_cstock == undefined) ? 0: response.inv_cstock;
          // invCCustomers = (response.inv_ccustomers == undefined) ? 0: response.inv_ccustomers;
        //  console.log(invCStock);
        }
        // if(noErrors(response)){
        //   displayResults(response, makeRow);
        // }
       }

    });
  }

  previousRowClicked = this;
});

//////////OPEN PRODUCT POP UP///////////////////////////////
$(document.body).on('dblclick', '.dblclickable', function(){
  document.getElementById('productOpened').innerHTML = this.parentElement.id;
//  console.log(document.getElementById('productOpened').innerHTML);
  // document.getElementById('productOpenedType').innerHTML = this.id;
  switch(previousdbSelected){
    case 'Products':
      popupWindow = window.open('./popUps/popUpProducts/productsPopUp.html',
      'popUpProduct', 'height=500, width=525, position=fixed, top=50%, left=50%, resizable=yes,scrollbars=yes, toolbar=no, menubar=no, location=no, directories=no, status=yes');
      break;
    case 'Customers':
      popupWindow = window.open('./popUps/popUpCustomers/customersPopUp.html',
      'popUpCustomer', 'height=600, width=700, position=fixed, top=50%, left=50%, resizable=yes,scrollbars=yes, toolbar=no, menubar=no, location=no, directories=no, status=yes');
      break;
    case 'Orders':
      break;
    case 'Invoices':
      break;
  }



});
