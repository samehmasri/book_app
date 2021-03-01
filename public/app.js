$(document).ready(function(){
  $("form").submit(function(){
if ($('input:checkbox').filter(':checked').length < 1){
      alert("Please Check at least one Check Box");
return false;
}
  });
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}