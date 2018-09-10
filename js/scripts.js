$(document).ready(function(){
  $("form#billinginfo").submit(function(event){
    event.preventDefault();
    var customerName = $("input#fullName").val();
    var streetAddress = $("input#streetaddress").val();
    var city = $("input#city").val();
    var zipCode = $("input#zipcode").val();
    var state = $("#state").val();
    var country = $("#country").val();
    var customerEmail = $("input#emailaddress").val();
    $(".customerName").text(customerName);
    $(".streetAddress").text(streetAddress);
    $(".customerCity").text(city);
    $(".customerState").text(state);
    $(".customerZipCode").text(zipCode);
    $(".customerCountry").text(country);
    $(".customerEmail").text(customerEmail);
  });
});
