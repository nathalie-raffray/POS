/////////////////////////FOR REFERENCE////////////////////////////////////////////////////
/*
  Mousestop plugin: http://mousestop.websanova.com/
  Synchronous events: https://stackoverflow.com/questions/30444466/key-pressed-and-click-in-the-same-time


*/

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




//////////////////////////////////////////NAV BAR///////////////////////////////////////////////////
//var containerHeaders = document.getElementsByClassName('header');

for(var i = 0; i < navButtons.length; i++)
{
  navButtons[i].addEventListener('click', function(e){

    switch(this.textContent){

      case 'Customers':

        //CHANGE MAIN BAR
        containerHeaders[1].textContent = 'Customer Name';
        containerHeaders[2].textContent = 'Phone Number';
        containerHeaders[3].textContent = 'Address';
        containerHeaders[4].textContent = 'Points';
        containerHeaders[5].textContent = 'Discount';
        containerHeaders[6].textContent = '';
        containerHeaders[7].textContent = '';

        //CHANGE SELECT
        searchBy.options[0].textContent = 'Customer';
        searchBy.options[1].textContent = 'Phone Number';
        searchBy.options[2].textContent = 'Address';
        searchBy.options[3].textContent = 'Points';

        break;

      case 'Products':

        //CHANGE MAIN BAR
        containerHeaders[1].textContent = 'Description';
        containerHeaders[2].textContent = 'Price';
        containerHeaders[3].textContent = 'Inventory';
        containerHeaders[4].textContent = 'Genre';
        containerHeaders[5].textContent = 'Filed Under';
        containerHeaders[6].textContent = 'Condition';
        containerHeaders[7].textContent = 'Label';

        //CHANGE SELECT
        searchBy.options[0].textContent = 'Product';
        searchBy.options[1].textContent = 'Description';
        searchBy.options[2].textContent = 'Genre';
        searchBy.options[3].textContent = 'Label';

        break;

      case 'Orders':
        //console.log('o');
        break;

      case 'Order Requests':
       // console.log('or');
        break;

      case 'Invoices':
        //console.log('i');
        break;

    }

  });
}


//////////////////////////////////STUPID ARROWS////////////////////////////////////////////////////////
var arrowButtons = document.getElementsByClassName('headerbutton');

for(var i = 0; i < arrowButtons.length; i++)
{
  arrowButtons[i].addEventListener('mousedown', function(e){
    this.style.backgroundColor = '#c0c0c0';
  });
  arrowButtons[i].addEventListener('click', function(e){

    this.style.backgroundColor = '#f0f0f0';

    if(this.children[1].textContent == '\u25bc'){ //down arrow
      this.children[1].textContent = '\u25b2';    //up arrow
      //ADD FUNCTIONALITY HERE
    }
    else{
      this.children[1].textContent = '\u25bc';    //down arrow
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////SMART FIND//////////////////////////////////////////////////////////////////
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

///////////////////////////CLICKING AND DOUBLE CLICKING A ROW//////////////////////////////////////////////


var previousRowClicked;
var previousColor;

$(document.body).on('click', '.row', function(){       //when row is clicked, the color of the row changes

  if(previousColor != undefined && previousRowClicked != undefined)
  {
    previousRowClicked.style.backgroundColor = previousColor;
  }
  previousRowClicked = this;
  previousColor = window.getComputedStyle(this).getPropertyValue('background-color');

  this.style.backgroundColor = '#c0c0c0';

});


$(document.body).on('dblclick', '.row', function(){
  document.getElementById('productOpened').innerHTML = this.id;
  // document.getElementById('productOpenedType').innerHTML = this.id;
  popupWindow = window.open('./popUps/popUpProducts/productsPopUp.html',
    'popUpProduct', 'height=500, width=525, position=fixed, top=50%, left=50%, resizable=yes,scrollbars=yes, toolbar=no, menubar=no, location=no, directories=no, status=yes');

});
