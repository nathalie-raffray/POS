
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
  document.getElementById('tsearch').placeholder = ' Search Customers';
});

$('#tsearchProduct').click(function(){
  document.getElementById('tsearch').placeholder = ' Search Products';
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
  getTransactionRow(e);
}
//function (e) {
    // if(e.keyCode == 13) { //if enter is pressed
    //   var search = document.getElementById('tsearch').value;
    //   var filter = '';
    //   if(((search[0] == 'L' || search[0] == 'l') && ((search[1] == 'P' || search[1] == 'p') || (search[1] == 'N' || search[1] == 'n')))
    //   || ((search[0] == 'C' || search[0] == 'c') && (search[1] == 'D' || search[1] == 'd'))){
    //     filter = 'Product Code';
    //   }else{
    //     filter = 'All';
    //   }
    //
    //   if(input !== ''){
    //     search = {
    //       entered: search,
    //       filter: filter,
    //       //searchIndex: searchIndex,
    //       //database: dbArray,
    //     };
    //
    //     $.ajax({
    //       type: 'POST',
    //       url: 'Products/searchProducts.php',
    //       data: search,
    //       success: function(response){
    //         console.log(response);
    //         if(noErrors(response)){
    //
    //           console.log('HI!');
    //           response = JSON.parse(response);
    //
    //           if(response.length == undefined){ //if only one result is returned
    //             makeTransactionRow(JSON.parse(response.data)[0]);
    //           }
    //           console.log(response.length);
    //
    //           //displayResults(response, makeRow);
    //         }
    //        }
    //     });
    //   }
    // }
//}
);

function getTransactionRow(e, database){
  if(e.keyCode == 13) { //if enter is pressed

    var input = document.getElementById('tsearch').value;
    var filter = '';
    var search;

    if(database == 'Products'){
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
        };

        $.ajax({
          type: 'POST',
          url: 'Products/searchProducts.php',
          data: search,
          success: function(response){
            console.log(response);
            if(noErrors(response)){

              console.log('HI!');
              response = JSON.parse(response);

              if(response.length == undefined){ //if only one result is returned
                makeTransactionRow(JSON.parse(response.data)[0]);
              }
              console.log(response.length);

              //displayResults(response, makeRow);
            }
           }
        });
      }

    }else if(database == 'Customers'){
      if(input.trim() != ''){
        filter = 'All';

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

              if(response.length == undefined){ //if only one result is returned
                response = JSON.parse(response.data)[0];
                console.log("only one");
                //showCustomer(response);
              }
              console.log("more than one");

              // if(response.length == undefined){ //if only one result is returned
              //   makeTransactionRow(JSON.parse(response.data)[0]);
              // }
              // console.log(response.length);

              //displayResults(response, makeRow);
            }
           }
        });
      }


    }



  }
}

function makeTransactionRow(response){
  console.log(response);
  var table = document.getElementById('transactionTable');

  var clone = document.getElementById('transactionSampleRow').cloneNode(true);
  clone.style.display = 'table-row';

  //clone.find('.productName')
  //clone.css('display', 'none');
  $(clone).find('.productName')[0].innerHTML = response.description;
  var code;
  if(response.type == 1){
    code = 'LP' + response.id;
  }else if(response.type == 2){
    code = 'LN' + response.id;
  }else if(response.type == 3){
    code = 'CD' + response.id;
  }

  $(clone).find('.productId')[0].innerHTML = code;

  console.log($(clone).find('.productName'));
  $(clone).find('.sell')[0].value = response.sell;
  $(clone).find('.totalsell')[0].value = response.sell;
  //console.log($(clone).find('.productName'));
  table.appendChild(clone);

  //CHANGE SUBTOTAL
  var currSubTotal = parseFloat(document.getElementById('subtotal').innerHTML);
  document.getElementById('subtotal').innerHTML = parseFloat(currSubTotal + parseFloat(response.sell)).toFixed(2);

  document.getElementById('tsearch').value = '';

}

function showCustomer(response){
  document.getElementById('tcustomername').innerHTML = response.firstname + response.lastname;
  document.getElementById('tphone').innerHTML = response.mainphone;
  document.getElementById('temail').innerHTML = response.email;
  document.getElementById('taddress1').innerHTML = response.address1;
  document.getElementById('taddress2').innerHTML = response.address2;
  document.getElementById('taddress3').innerHTML = response.city+', '+response.province+', '+reponse.postalcode;
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
    getTransactionRow(e);

    //	$('#scannerInput').val (barcode);

    } // main callback function	,
	,
	onError: function(string, qty) {
  //  $('#tsearch').val($('#tsearch').val() + string);
  //  console.log("written manually: " + string);

//	$('#userInput').val ($('#userInput').val()  + string);


	}
});
