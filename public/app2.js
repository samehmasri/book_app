$('#updateForm').hide();
$('#updateBtn').on('click',function(){
    $('#updateForm').toggle();
})
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}