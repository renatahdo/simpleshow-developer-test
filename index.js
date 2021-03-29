$('#start-button').click(function () {
  $('#start').addClass('hide')
})

$('#close-button').click(function () {
  $('#scenario').addClass('hide')
  $('#end').addClass('hide')
  $('#start').addClass('hide')
  $('#interaction').addClass('hide')
  $('#finish').removeClass('hide')
})

$('.drag-item').draggable({
   containment: '#interaction',
   cursor: 'move',
   snap: '.drop-zone',
   revert: 'invalid'
})

$(".drag-item").data("dropped", false);

var dropCounter = 0

$(".drop-zone").droppable({
   drop: function (event, domElem) {

     if (!domElem.draggable.data('dropped')) {
       domElem.draggable.data('dropped', true)
       dropCounter += 1
       if (dropCounter === 6) {
         $('#end').removeClass('hide')
       }
     }
   }
});

$("#arm-1-zone").droppable("option", "accept", ".arm-1");
$("#arm-2-zone").droppable("option", "accept", ".arm-2");
$("#leg-1-zone").droppable("option", "accept", ".leg-1");
$("#leg-2-zone").droppable("option", "accept", ".leg-2");
$("#chest-zone").droppable("option", "accept", ".chest");
$("#head-zone").droppable("option", "accept", ".head");