

$(document).ready(function(){


$('#formatbutton').click(function(){
  // 1
var $tow = $('#ToW').val();
 // 2
var $aow = $('#AoW').val();
  // 3
var $pub = $('#Pub').val();
  // 4
var $wu =  $('#WU').val();
  // 5
var $da =  $('#DA').val();


//var $textz = {$tow,$aow,$pub,$wu,$da};
document.getElementById('cake').innerHTML = $tow+" "+$aow+
" "+$pub+" "+$wu+" "+$da;
//$('#results').append($txt0);

});
});
