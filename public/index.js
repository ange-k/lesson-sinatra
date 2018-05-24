function init(){
  $('#del-toggle-btn').click(function() {
    $('.del-btn').toggle(500);
  });
  $('#edit-toggle-btn').click(function() {
    $('.edit-btn').toggle(500);
  });

  $('.edit-btn').click(function(){
    $('.edit-menu').toggle(500);
  });
}

$(function(){
  init();
});
