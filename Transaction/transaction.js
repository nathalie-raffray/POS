
$('#tcustomertitleBox').click(function(e){
  this.style.backgroundImage = 'none';
  this.style.borderRight = 'none';
  this.style.borderBottom = 'none';
  $('#twalkintitleBox').css("background-image", "linear-gradient(rgb(34, 34, 34), rgb(8, 8, 8))");
  $('#twalkintitleBox').css("border-left", "1px solid rgb(54, 54, 54)");
  $('#twalkintitleBox').css("border-bottom", "1px solid rgb(54, 54, 54)");
  $('#tcustomerInfo').show();
  $('#twalkinInfo').hide();
});

$('#twalkintitleBox').click(function(e){
  this.style.backgroundImage = 'none';
  this.style.borderLeft = 'none';
  this.style.borderBottom = 'none';
  $('#tcustomertitleBox').css("background-image", "linear-gradient(rgb(34, 34, 34), rgb(8, 8, 8))");
  $('#tcustomertitleBox').css("border-right", "1px solid rgb(54, 54, 54)");
  $('#tcustomertitleBox').css("border-bottom", "1px solid rgb(54, 54, 54)");
  $('#tcustomerInfo').hide();
  $('#twalkinInfo').show();
});

//WHEN YOU CLICK POCHETTES/GEAR/DRANKS/OTHER
$('.tbeep').click(function(e){
  console.log(this);
  $(this).show();
  $('.tbuttonBox').hide();
  $('#'+ this.id + 'Box').show();
  $('.tbeep:not(#' + this.id + ')').css('border-bottom', '1px solid rgb(47, 47, 47)');
  this.style.borderBottom = 'none';
  $('.tbeep:not(#' + this.id + ')').css('background-image', 'linear-gradient(rgb(34, 34, 34), rgb(8, 8, 8))');
  this.style.backgroundImage = 'none';
});

//THESE NEXT TWO ARE FOR THE SEARCH BAR
$('#tsearchCustomer').click(function(){
  document.getElementById('tsearch').placeholder = 'Search Customers';
});

$('#tsearchProduct').click(function(){
  document.getElementById('tsearch').placeholder = 'Search Products';
});

//WHEN YOU SELECT A ROW IT TURNS GREEN
var previousTransactionRowSelected;
$('#transactionScreen').on('click', '#transactionTable tr:not(first-child)', function(e){

  this.style.borderBottom = 'none, 1px solid rgb(125, 170, 108)';
  $(this).css('background', 'linear-gradient(rgb(104, 168, 94), rgb(74, 122, 67)) bottom center / auto 51% no-repeat, linear-gradient(rgb(197, 251, 172), rgb(119, 184, 108)) top center / auto 49% no-repeat');
  $(this).find('td:nth-child(2)').css('color', 'black');

  if(previousTransactionRowSelected != undefined && previousTransactionRowSelected.style != undefined && previousTransactionRowSelected != this){
    previousTransactionRowSelected.style.borderBottom = '1px solid rgb(43, 43, 42)';
    $(previousTransactionRowSelected).css('background', 'linear-gradient(rgb(40, 40, 40), rgb(85, 85, 85))');
    $(previousTransactionRowSelected).find('td:nth-child(2)').css('color', 'white');
  }

  previousTransactionRowSelected = this;

});

var previousTSearchRowSelected;
var prevBC;
$(document.body).on('click', '#tsearchTable tr:not(first-child)', function(e){
  if(this.style.backgroundColor != 'green'){
    var bodyStyle = window.getComputedStyle(this, null);
    bgColor = bodyStyle.backgroundColor;

    $(this).css('background-image', 'linear-gradient(rgb(208, 227, 141), rgb(168, 205, 112))');
    $(this).css('border-top', '1px solid rgb(221, 238, 164)');
    $(this).css('color', 'black');

    if(previousTSearchRowSelected != undefined){
      $(previousTSearchRowSelected).css('background-color', prevBC);
      $(previousTSearchRowSelected).css('background-image', 'none');
      $(previousTSearchRowSelected).css('border-top', 'none');
      $(previousTSearchRowSelected).css('color', 'white');
    }

    prevBC = bgColor;
    previousTSearchRowSelected = this;
  }

});

$(document.body).on('dblclick', '#tsearchTable tr:not(first-child)', function(e){
  var e = new CustomEvent('keyup');
  e.which = 13;
  var database = 'Products';

  var getbyID = false;
  //console.log($('#tsearchTable .marker')[0].innerHTML);

  if($('#tsearchTable thead tr:first-child').css('display') == 'none'){
    database = 'Customers';
    getbyID = true;
  }

  console.log(this.children[0].innerHTML);
  document.getElementById('tsearch').value = this.children[0].innerHTML;

  document.getElementById('tsearchTable').style.display = 'none';
  document.getElementById('transactionTable').style.display = 'table';

  getTransactionRow(e, database, getbyID);
  document.getElementById('tsearch').value = '';
  document.getElementById('tsearch').placeholder = 'Search Products';
  $('#tsearch').focus();
});

//TO DELETE A ROW ON TRANSACTION SCREEN USING DELETE BUTTON
$(document.body).keydown(function(e){
  if(e.which == 8){ //if the key pressed was "delete"
    console.log('YO');
    $(previousTransactionRowSelected).remove();
    // if(previousTransactionRowSelected.style.borderBottom == 'none, 1px solid rgb(125, 170, 108)'){
    //   $(previousTransactionRowSelected).remove();
    //   console.log('YOYO');
    // }
  }
});

//WHEN YOU SELECT AN INPUT IT WILL SELECT ALL
$("#transactionScreen").on("click", 'input[type="text"]', function () {
   $(this).select();
});

//CHANGE THE QUANTITY OF AN ITEM
$("#transactionScreen").on('keyup', '.qty', function (e) {
    if (e.keyCode == 13) { //if enter is pressed
      var row = $(this).parent().parent();
      applyDiscountQty(row);
    }
});

//CHANGE THE discount OF AN ITEM
$("#transactionScreen").on('keyup', '.discount', function (e) {
    if (e.keyCode == 13) {
      var row = $(this).parent().parent();
      applyDiscountQty(row);
    }
  });

  function applyDiscountQty(row){
    var qty = parseFloat(row.find('.qty').val());
    var sell = parseFloat(row.find('.sell').val());
    var totalsell = row.find('.totalsell');
    var temp = parseFloat(totalsell.val());

    //APPLY DISCOUNT
    var discount = parseFloat(row.find('.discount').val());

    //CHANGE THE TOTAL SELL
    var newTotalSell = parseFloat((qty * sell - discount).toFixed(2)); //this will always round it to two decimal places
    totalsell.val(newTotalSell);

    //CHANGE THE SUBTOTAL
    var currSubTotal = parseFloat(document.getElementById('subtotal').innerHTML);
    console.log(currSubTotal);
    document.getElementById('subtotal').innerHTML = parseFloat(currSubTotal - temp + newTotalSell).toFixed(2);
  }

$("#transactionScreen").on('keyup', '#tsearch', function(e){
  var database = 'Products';
  if(document.getElementById('tsearch').placeholder == 'Search Customers'){
    database = 'Customers';
  }
  getTransactionRow(e, database, false);
});

function getTransactionRow(e, database, getByID){
  //console.log(database);
  if(e.which == 13) { //if enter is pressed

    var input = document.getElementById('tsearch').value;
    console.log(input);
    var filter = '';
    var search;
    var orderby;
    var ascdesc;

    if(database == 'Products'){
      orderby = 'inv_floor';
      ascdesc = 'DESC';
      if(((input[0] == 'L' || input[0] == 'l') && ((input[1] == 'P' || input[1] == 'p') || (input[1] == 'N' || input[1] == 'n')))
      || ((input[0] == 'C' || input[0] == 'c') && (input[1] == 'D' || input[1] == 'd'))){
        filter = 'Product Code';
      }else{
        filter = 'All';
      }

      if(input.trim() != ''){
        search = {
          entered: input,
          filter: filter,
          orderby: orderby,
          ascdesc: ascdesc
        };

        //console.log(search);

        $.ajax({
          type: 'POST',
          url: 'Products/searchProducts.php',
          data: search,
          success: function(response){
            console.log(response);
            if(noErrors(response)){

              console.log('HI!');
              response = JSON.parse(response);
              response = JSON.parse(response.data)
              console.log(response);
              console.log(response.length);

              if(response.length == 1){ //if only one result is returned
                document.getElementById('transactionTable').style.display = 'table';
                document.getElementById('tsearchTable').style.display = 'none';
                makeTransactionRow(response[0]);
              }else{
                $('#tsearchTable tr:not(.dontclear)').remove();
                document.getElementById('transactionTable').style.display = 'none';
                document.getElementById('tsearchTable').style.display = 'table';
                document.getElementById('tsearchHeader').style.display = 'table-row';
                document.getElementById('tsearchHeaderCustomer').style.display = 'none';
                for(var i = 0; i<response.length; i++){
                  maketSearchRow(response[i]);
                }

              }
            //  console.log(response.length);

              //displayResults(response, makeRow);
            }
           }
        });
      }

    }else if(database == 'Customers'){
      if(input.trim() != ''){
        if(getByID){
          filter = 'id'
        }else{
          filter = 'All';
        }

        search = {
          entered: input,
          filter: filter,
        };

        $.ajax({
          type: 'POST',
          url: 'Customers/searchCustomers.php',
          data: search,
          success: function(response){
            console.log(response);
            if(noErrors(response)){
              console.log('HI!');
              response = JSON.parse(response);
              response = JSON.parse(response.data);


              if(response.length == 1){ //if only one result is returned
              //  response = JSON.parse(response.data);
                console.log("only one");
                console.log(response[0]);
                showCustomer(response[0]);
              }else{
                $('#tsearchTable tr:not(.dontclear)').remove();
                document.getElementById('transactionTable').style.display = 'none';
                document.getElementById('tsearchTable').style.display = 'table';
                document.getElementById('tsearchHeader').style.display = 'none';
                document.getElementById('tsearchHeaderCustomer').style.display = 'table-row';
                for(var i = 0; i<response.length; i++){
                  maketSearchCustomerRow(response[i]);
                }
                console.log("more than one");
              }
            }
           }
        });
      }
    }
  }
}

function maketSearchRow(response){
  var table = document.getElementById('tsearchTable');
  var clone = document.getElementById('tsearchSampleRow').cloneNode(true);
  clone.style.display = 'table-row';

  $(clone).find('#tsearchDescription')[0].innerHTML = response.description;

  for(var i = response.id.length; i<8; i++){
    response.id = '0' + response.id;
  }
  console.log(response.id.length);

  var code;
  if(response.type == 1){
    code = 'LP' + response.id;
  }else if(response.type == 2){
    code = 'LN' + response.id;
  }else if(response.type == 3){
    code = 'CD' + response.id;
  }

  $(clone).find('#tsearchId')[0].innerHTML = code;
  $(clone).find('#tsearchPrice')[0].innerHTML = response.sell;
  $(clone).attr('id', '');
  $(clone).attr('class', '');
  $(clone).find('#tbuttQty')[0].innerHTML = response.inv_floor;
  table.appendChild(clone);
//  console.log($(clone).find('#tsearchId'));
}

function maketSearchCustomerRow(response){
  var table = document.getElementById('tsearchTable');
  var clone = document.getElementById('tsearchSampleCustRow').cloneNode(true);
  clone.style.display = 'table-row';
  $(clone).find('#tsearchCid')[0].innerHTML = response.id;
  $(clone).find('#tsearchName')[0].innerHTML = response.firstname+' '+response.lastname;

  $(clone).find('#tsearchPhone')[0].innerHTML = response.mainphone;
  $(clone).attr('id', '');
  $(clone).attr('class', '');
  $(clone).find('#tsearchEmail')[0].innerHTML = response.email;
  table.appendChild(clone);
  //console.log($(clone).find('#tsearchId'));

}

function makeTransactionRow(response){
  console.log(response);
  var table = document.getElementById('transactionTable');

  var clone = document.getElementById('transactionSampleRow').cloneNode(true);
  clone.style.display = 'table-row';

  $(clone).find('.productName')[0].innerHTML = response.description;

  for(var i = response.id.length; i<8; i++){
    response.id = '0' + response.id;
  }
  console.log(response.id.length);

  var code;
  if(response.type == 1){
    code = 'LP' + response.id;
  }else if(response.type == 2){
    code = 'LN' + response.id;
  }else if(response.type == 3){
    code = 'CD' + response.id;
  }

  $(clone).find('.productId')[0].innerHTML = code;

  //console.log($(clone).find('.productName'));
  $(clone).find('.sell')[0].value = response.sell;
  $(clone).find('.totalsell')[0].value = response.sell;
  table.appendChild(clone);

  //CHANGE SUBTOTAL
  var currSubTotal = parseFloat(document.getElementById('subtotal').innerHTML);
  document.getElementById('subtotal').innerHTML = parseFloat(currSubTotal + parseFloat(response.sell)).toFixed(2);

  document.getElementById('tsearch').value = '';

}


function showCustomer(response){
  document.getElementById('tcustomername').innerHTML = response.firstname+' '+response.lastname;
  document.getElementById('tphone').innerHTML = response.mainphone;
  document.getElementById('temail').innerHTML = response.email;
  document.getElementById('taddress1').innerHTML = response.address1;
  document.getElementById('taddress2').innerHTML = response.address2;
  document.getElementById('taddress3').innerHTML = response.city+', '+response.province+', '+response.postalcode;
  document.getElementById('tcountry').innerHTML = response.country;

  if(response.discount == 'Employee'){

  }else if(response.discount == '5' || response.discount == '10' || response.discount == '15'){
    var discount = parseInt(response.discount) * 0.01;
    //fore
  }
}

$('#tsearch').scannerDetection({
  //https://github.com/kabachello/jQuery-Scanner-Detection

	timeBeforeScanTest: 200, // wait for the next character for upto 200ms
	avgTimeByChar: 40, // it's not a barcode if a character takes longer than 100ms
	preventDefault: false,

	endChar: [13],
		onComplete: function(barcode, qty){
   validScan = true;

    $('#tsearch').val(barcode);
    //console.log("barcode: " + barcode);
    var e = new CustomEvent('keyup');
    e.which = 13;
    var database = 'Products';
    if(document.getElementById('tsearch').placeholder == 'Search Customers'){
      database = 'Customers';
    }
    getTransactionRow(e, database, false);


    } // main callback function	,
	,
	onError: function(string, qty) {
  //  $('#tsearch').val($('#tsearch').val() + string);
  //  console.log("written manually: " + string);

//	$('#userInput').val ($('#userInput').val()  + string);


	}
});
