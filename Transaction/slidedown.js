// /* Open */
// function openNav() {
//   document.getElementById("myNav").style.height = "100%";
// }
//
// /* Close */
// function closeNav() {
//   document.getElementById("myNav").style.height = "0%";
// }

/* Open */
document.getElementById('transactionScreenButton').addEventListener('click', function(e){
  //console.log(document.getElementById('transactionScreen'));
  e.preventDefault();
  document.getElementById('transactionScreen').style.width='100%';
});

/* Close */
document.getElementById('goBack').addEventListener('click', function(e){
  //console.log(document.getElementById('transactionScreen'));
  e.preventDefault();
  document.getElementById('transactionScreen').style.width='0%';
});
