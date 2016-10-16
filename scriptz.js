

$(document).ready(function(){
var i = 0;

$('#formatbutton').click(function(){
  var $tow = $('#ToW').val();
   // 2
  var $aow = $('#AoW').val();
    // 3
  var $pub = $('#pub').val();
    // 4
  var $Date = $('#Date').val();
    // 5
  var $da =  $('#DA').val();
  var a;
  if (i === 1){
      var a = "Print.";
  }else if (i === 2){
    var a = "Web.";
  }else {
    a = "";
  }
  if(($tow === "") && ($aow === "") && ($pub === "") && ($Date === "") && ($da === "")){
    document.getElementById('p1').innerHTML = "";
  } else if ($tow === "") {
  document.getElementById('p1').innerHTML = $aow  +", " + $pub +", " + $Date +", " + $da +", " + a;
}
 else if ($aow === "") {
  document.getElementById('p1').innerHTML = $tow +", " + $pub +", " + $Date +", " + $da +", " + a;
}else if ($pub === "") {
  document.getElementById('p1').innerHTML = $tow + ", " + $aow +", " + $Date +", " + $da +", " + a;
} else if($Date === "") {
  document.getElementById('p1').innerHTML = $tow + ", " + $aow  +", " + $pub +", " + $da +", " + a;
} else if($da === "") {
  document.getElementById('p1').innerHTML = $tow + ", " + $aow  +", " + $pub +", " + $Date +", " + a;
} else {
  document.getElementById('p1').innerHTML = $tow + ", " + $aow  +", " + $pub +", " + $Date +", " + $da +", " + a;
}

});

$('#removebutton').click(function(){
  // empyty paragraph
  document.getElementById('ToW').value = "";
  document.getElementById('AoW').value = "";
  document.getElementById('pub').value = "";
  document.getElementById('Date').value = "";
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
