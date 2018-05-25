function init(){
  $('#del-toggle-btn').click(function() {
    $('.del-btn').toggle(500);
  });
  $('#edit-toggle-btn').click(function() {
    $('.edit-btn').toggle(500);
  });

  $('.edit-btn').click(function(){
    $('.edit-menu').toggle(500);
    var todo_id = $(this).attr('todo_id');
    var content = $(this).attr('content');
    var status = $(this).attr('status');
    $('.edit-menu').find('form').attr('action', "/patch/" + todo_id);
    $('.edit-menu').find('.content-box').val(content);

    $('.status-sel option:selected').removeAttr("selected");
    $('.status-sel').val(status);

  });
}

$(function(){
  init();
});
