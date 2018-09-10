$(document).ready(function(){
  $("form#billinginfo").submit(function(event){
    event.preventDefault();
    var customerName = $("input#fullName").val();
    var streetaddress = $("input#streetadress").val();
    var state = $("#state").val();
    var country = $("#state").val();
  });
});
