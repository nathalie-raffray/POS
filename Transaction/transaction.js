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


$('.tbeep').click(function(e){
  console.log(this);
  $(this).show();
  // $('.tbuttonBox:not(#' + this.id + 'Box)').hide();
  $('.tbuttonBox').hide();
  $('#'+ this.id + 'Box').show();
  // $('.tbeep:not(#' + this.id + ')').hide();
  $('.tbeep:not(#' + this.id + ')').css('border-bottom', '1px solid rgb(47, 47, 47)');
  this.style.borderBottom = 'none';
  $('.tbeep:not(#' + this.id + ')').css('background-image', 'linear-gradient(rgb(34, 34, 34), rgb(8, 8, 8))');
  this.style.backgroundImage = 'none';
});

$('#tsearchCustomer').click(function(){
  document.getElementById('tsearch').placeholder = ' Search Customers';
});

$('#tsearchProduct').click(function(){
  document.getElementById('tsearch').placeholder = ' Search Products';
});

var previousTransactionRowSelected;
$('#transactionScreen').on('click', '#transactionTable tr:not(first-child)', function(e){
  // if(this.style.borderBottom = '1px solid rgb(125, 170, 108)'){ //then the thing
  //
  // }
  this.style.borderBottom = '1px solid rgb(125, 170, 108)';
  this.style.backgroundImage = 'linear-gradient(rgb(104, 168, 94), rgb(74, 122, 67))';
  $(this).find('td:nth-child(2)').css('color', 'black');

  if(previousTransactionRowSelected != undefined && previousTransactionRowSelected.style != undefined){
    previousTransactionRowSelected.style.borderBottom = '1px solid rgb(43, 43, 42)';
    previousTransactionRowSelected.style.backgroundImage = 'linear-gradient(rgb(40, 40, 40), rgb(85, 85, 85))';
    $(previousTransactionRowSelected).find('td:nth-child(2)').css('color', 'white');
  }

  previousTransactionRowSelected = this;

});
