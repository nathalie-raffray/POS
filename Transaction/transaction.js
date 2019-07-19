$('#tcustomertitle').click(function(e){
  this.style.backgroundImage = 'none';
  this.style.borderRight = 'none';
  this.style.borderBottom = 'none';
  $('#twalkintitle').css("background-image", "linear-gradient(rgb(34, 34, 34), rgb(8, 8, 8))");
  $('#twalkintitle').css("border-left", "1px solid rgb(54, 54, 54)");
  $('#twalkintitle').css("border-bottom", "1px solid rgb(54, 54, 54)");
  $('#tcustomerInfo').show();
  $('#twalkinInfo').hide();
});

$('#twalkintitle').click(function(e){
  this.style.backgroundImage = 'none';
  this.style.borderLeft = 'none';
  this.style.borderBottom = 'none';
  $('#tcustomertitle').css("background-image", "linear-gradient(rgb(34, 34, 34), rgb(8, 8, 8))");
  $('#tcustomertitle').css("border-right", "1px solid rgb(54, 54, 54)");
  $('#tcustomertitle').css("border-bottom", "1px solid rgb(54, 54, 54)");
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

// $('#poch').click(function(e){
//   // e.preventDefault();
//   $('#tbuttonBox').show();
//   $('#tbuttonBoxGear').hide();
//   $('#tbuttonBoxDranks').hide();
//   $('#tbuttonBoxOther').hide();
// });
//
// $('#gear').click(function(e){
//   // e.preventDefault();
//   $('#tbuttonBox').hide();
//   $('#tbuttonBoxGear').show();
//   $('#tbuttonBoxDranks').hide();
//   $('#tbuttonBoxOther').hide();
// });
//
// $('#dranks').click(function(e){
//   // e.preventDefault();
//   $('#tbuttonBox').hide();
//   $('#tbuttonBoxGear').hide();
//   $('#tbuttonBoxDranks').show();
//   $('#tbuttonBoxOther').hide();
// });
//
// $('#other').click(function(e){
//   // e.preventDefault();
//   $('#tbuttonBox').hide();
//   $('#tbuttonBoxGear').hide();
//   $('#tbuttonBoxDranks').hide();
//   $('#tbuttonBoxOther').show();
// });
