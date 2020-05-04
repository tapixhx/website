$(document).ready(function() {
    if ($(window).width() > 768) {
      // var windo_height= $(window).height();
      var contain_height = $(".dashboard_rightheader").height();
      var foot_height = $(".dash_footer").height();
      $(".dashboard_leftheader").height(contain_height);
    }
  
  });
  $('.next').click(function() {
  
    var nextId = $(this).parents('.tab-pane').next().attr("id");
    $('[href=#' + nextId + ']').tab('show');
  
  })
  
  $('.first').click(function() {
    $('#myWizard a:first').tab('show')
  })