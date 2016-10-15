



$(document).ready(function(){
var i = 0;

$('#formatbutton').click(function(){
  var $tow = $('#ToW').val();
   // 2
  var $aow = $('#AoW').val();
    // 3

    // 4
  var $pub = $('#Pub').val();
    // 5
  var $da =  $('#DA').val();
  var a;
  if (i === 1){
      var a = "print";
  }else if (i === 2){
    var a = "web";
  }else {
    a = "";
  }

document.getElementById('p1').innerHTML = $tow + ", " + $aow  +", " + $pub + ", " + a +", " + $da;


});

$('#removebutton').click(function(){
  // empyty paragraph
  document.getElementById('ToW').value = "";
  document.getElementById('AoW').value = "";

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

  $('#print').click(function(){
      $(this).css({'background-color':'grey'});
    $('#web').css({'background-color':'white'});
    i = 1;


    return i;
  });

  $('#print').dblclick(function(){
    $(this).css({'background-color':'white'});
    i = 0;
    return i;
  });

  $('#web').dblclick(function(){
    $(this).css({'background-color':'white'});
    i = 0;
    return i;
  });

  $('#web').click(function(){
    $(this).css({'background-color':'grey',});
    $('#print').css({'background-color':'white'});

    i = 2;
    return i;
  });

});
