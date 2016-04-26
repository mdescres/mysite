/*$('#skills-menu').on("click", function() {
  $('#research').foundation(
    'down', $('#research-tab'), true
  );
  $('#productivity').foundation(
    'down', $('#productivity-tab',), true
  );
  $('#sherpa').foundation(
    'down', $('#sherpa-tab'), true
  );
  }
);*/

$( document ).ready(function(){
  $('#skills-menu').click( function() {
    $('#research').foundation('down', $('#research-tab'), true);
  });

  var cb = [];
  $('#equ-test').on('down.zf.accordion', function() {
    $('#equ-test').foundation('getHeights', function(height){cb=height});
    $('#equ-test').foundation('applyHeight', cb);
  });
  $('#equ-test').on('up.zf.accordion', function() {
    $('#equ-test').foundation('getHeights', function(height){cb=height});
    $('#equ-test').foundation('applyHeight', cb);
  });

  //$('#research').on('toggle', function () {
  //  $('#research').foundation('_reflow');
  //});
});
