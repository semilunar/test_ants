$(document).ready(function() {

$('.circle').click(function(){
  var circle_1 = $(this).data('circle_1');
  var parallelogram_1 = $(this).data('parallelogram_1');
  var rhombus = $(this).data('rhombus');
  var rectangle_1 = $(this).data('rectangle_1');
  var rectangle_2 = $(this).data('rectangle_2');
  var parallelogram_2 = $(this).data('parallelogram_2');
  var circle_2 = $(this).data('circle_2');


  $('.sсheme__circle_1').text(circle_1);
  $('.scheme_parallelogram_1').text(parallelogram_1);
  $('.sсheme__rhombus').text(rhombus);
  $('.scheme__rectangle_1').text(rectangle_1);
  $('.scheme__rectangle_2').text(rectangle_2);
  $('.scheme_parallelogram_2').text(parallelogram_2);
  $('.sсheme__circle_2').text(circle_2);

})

});