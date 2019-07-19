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
  this.style.borderBottom = 'none, 1px solid rgb(125, 170, 108)';
  $(this).css('background', 'linear-gradient(rgb(104, 168, 94), rgb(74, 122, 67)) bottom center / auto 51% no-repeat, linear-gradient(rgb(197, 251, 172), rgb(119, 184, 108)) top center / auto 49% no-repeat');
  $(this).find('td:nth-child(2)').css('color', 'black');
  // $(this).css('background-size','auto 51%, auto 49%');
  // $(this).css('background-repeat','no-repeat');

  // background-image:linear-gradient(rgb(104, 168, 94), rgb(74, 122, 67)), linear-gradient(rgb(197, 251, 172), rgb(119, 184, 108));
	// background-position:bottom center, top center;
  // background-size: auto 50%, auto 50%;
  // border-bottom: none, 1px solid rgb(125, 170, 108);
  // background-repeat: no-repeat;

  if(previousTransactionRowSelected != undefined && previousTransactionRowSelected.style != undefined && previousTransactionRowSelected != this){
    previousTransactionRowSelected.style.borderBottom = '1px solid rgb(43, 43, 42)';
    $(previousTransactionRowSelected).css('background', 'linear-gradient(rgb(40, 40, 40), rgb(85, 85, 85))');
    $(previousTransactionRowSelected).find('td:nth-child(2)').css('color', 'white');
  }

  previousTransactionRowSelected = this;

});

$(document.body).keydown(function(e){
  if(e.which == 8){ //if the key pressed was "delete"
    console.log('YO');
    if(previousTransactionRowSelected.style.borderBottom == 'none, 1px solid rgb(125, 170, 108)'){
      $(previousTransactionRowSelected).remove();
    }
  }
})
