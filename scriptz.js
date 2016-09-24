



$(document).ready(function(){

  /*chrome.windows.create({
      url:"popup.html",
      type:"panel",
      width:300,
      height:200
      */


$('#formatbutton').click(function(){
  var $tow = $('#ToW').val();
   // 2
  var $aow = $('#AoW').val();
    // 3
  var $wu =  $('#WU').val();
    // 4
  var $pub = $('#Pub').val();
    // 5
  var $da =  $('#DA').val();

document.getElementById('p1').innerHTML = $tow + " " + $aow + " " + $wu +" " + $pub + " " + $da;
/*
document.getElementById('p2').innerHTML = $aow;
document.getElementById('p3').innerHTML = $wu;
document.getElementById('p4').innerHTML = $pub;
document.getElementById('p5').innerHTML = $da;
*/
//$('#results').append($txt0);

});

$('#removebutton').click(function(){
  // empyty paragraph
  document.getElementById('ToW').value = "";
  document.getElementById('AoW').value = "";
  document.getElementById('WU').value = "";
  document.getElementById('Pub').value = "";
  document.getElementById('DA').value = "";

// first try catch
try {
  document.getElementById('p1').innerHTML = ""

}

catch(err){
  console.log("hello world");
}

});


});
