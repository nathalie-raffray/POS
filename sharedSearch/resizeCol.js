
// $(function(){
//   $("table").colResizable();
// });

$("#tableheader").colResizable({
    liveDrag:true,
    // flush: true,
    // resizeMode: 'fit',
    hoverCursor: "col-resize",
    dragCursor: "col-resize",
    gripInnerHtml:"<div class='grip'></div>",
    draggingClass:"dragging" });

    // $(function(){
    //
    //   var onSampleResized = function(e){
    //     var table = $(e.currentTarget); //reference to the resized table
    //   };
    //
    //  $("#sample").colResizable({
    //     liveDrag:true,
    //     gripInnerHtml:"<div class='grip'></div>",
    //     draggingClass:"dragging",
    //     onResize:onSampleResized
    //   });
    //
    // });

// var hovering = false;
// var clickingMouse = false;
//
// function clickAndHover(){
//   return (hovering && clickingMouse);
// }
//
// // $('.border').hover(function(e){
// //   console.log("hovering");
// //   hovering = true;
// //
// //
// // });
//
// var currentPadding;
// var startMousePos = 0;
// var endMousePos = 0;
// var offset;
// var newPadding;
//
// function moveBar()
// {
//   console.log('moving');
//   currentPadding = parseInt($(targetColumn).css('padding-right'));
//   console.log(currentPadding);
//
//   offset = endMousePos - startMousePos;
//   newPadding = currentPadding + offset;
//   console.log(newPadding);
//   $(targetColumn).css('padding-right', newPadding);
// }
//
// var targetColumn;
//
// $(document.body).on({
//
//   mouseenter: function(e){
//     //console.log("hovering");
//     hovering = true;
//     if(clickAndHover()){
//       document.body.style.cursor = 'col-resize';
//       startMousePos = e.pageX;
//       targetColumn = '.' + e.currentTarget.parentNode.classList[0];
//       //console.log(targetColumn);
//     }
//   },
//   mouseleave: function(e){
//     //if(clickAndHover())
//
//     if(clickAndHover()){
//       document.body.style.cursor = 'col-resize';
//     }
//     hovering = false;
//     // if(clickAndHover()){
//     //   startMousePos = e.pageX;
//     //   targetColumn = '.' + e.currentTarget.parentNode.classList[0]; //or parentElement not sure
//     // }
//   },
//   mousemove: function(e)
//   {
//     if(clickAndHover())
//     {
//       document.body.style.cursor = 'col-resize';
//       endMousePos = e.pageX;
//       moveBar();
//       startMousePos = e.pageX;
//     }
//   },
//   mouseup: function(e){
//     if(e.which == 1)
//     {
//       //document.body.style.cursor = 'auto';
//       clickingMouse = false;
//       targetColumn = undefined;
//     }
//   },
//   mousedown: function(e){
//     if(e.which == 1)
//     {
//       //console.log('hi!');
//       //document.body.style.cursor = 'auto';
//       clickingMouse = true;
//       if(clickAndHover()){
//         document.body.style.cursor = 'col-resize';
//         startMousePos = e.pageX;
//         targetColumn = '.' + e.currentTarget.parentNode.classList[0];
//         //console.log(targetColumn);
//       }
//       //targetColumn = undefined;
//     }
//   }
//
//
//   //
//   //   if(e.which == 1)      //if left mouse click
//   //   {
//   //     clickingMouse = true;
//   //
//   //     if(clickAndCtrlPressing())
//   //     {
//   //       document.body.style.cursor = 'col-resize';
//   //
//   //       startMousePos = e.pageX;
//   //
//   //       if(e.currentTarget.localName == 'th')   //if what was selected was the header: Code || Description || Price, etc.
//   //       {
//   //         targetColumn = '.' + e.currentTarget.classList[0];
//   //       }
//   //       else targetColumn = '.' + e.currentTarget.className;
//   //     }
//   //   }
//   // },
//   // mouseup: function(e){
//   //   if(e.which == 1)
//   //   {
//   //     document.body.style.cursor = 'auto';
//   //     clickingMouse = false;
//   //     targetColumn = undefined;
//   //   }
//   // },
//   // mousemove: function(e)
//   // {
//   //   if(clickAndCtrlPressing())
//   //   {
//   //     document.body.style.cursor = 'col-resize';
//   //
//   //     endMousePos = e.pageX;
//   //
//   //     moveBar();
//   //
//   //     startMousePos = e.pageX;
//   //
//   //   }
//   // },
//   //
//   // mousestop: function(e)
//   // {
//   //  //REMINDER THAT I HAVE IMPORTED MOUSESTOP PLUGIN!
//   // }
// }, '.border');
