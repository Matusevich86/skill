(function ($) {
var count = '';
$(function() {
    count = $('input.likeinp[type=checkbox]:checked').length;
    displayCount();

    $('input.likeinp[type=checkbox]').bind('click' , function(e, a) {   
         if (this.checked) {
              count += a ? -1 : 1;
         } else {
              count += a ? 1 : -1;
         }
         displayCount();
    });
});
function displayCount() {
    $('#count').text(count);
}
})($);