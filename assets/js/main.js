(function($) {
  $(function() {

    $('.button-collapse').sideNav();
  }); // end of document ready

})(jQuery); // end of jQuery name space
$(document).ready(function() {
  /*var gg = $("#our-text").val()
  $("#our-text").keyup(function(){
    $("#results").text("sadsa")
    console.log(gg)
  })
  */
  $("#our-text")
    .keyup(function() {
      var value = $(this).val();
      $("#results").text(value);
    })
    .keyup();

  $("#bold").click(function() {
    //    $("#results").css("text-decoration",'line-through')
    $("#results").toggleClass("bolder")
  })
  $("#italic").click(function() {
    $("#results").toggleClass("italicu")
  })
  $("#strike").click(function() {
    $("#results").toggleClass("striketg")
  })
  var clipboard = new ClipboardJS('#copy-button');

})

function getCopy(){
  var copyText = document.getElementById("results");

/* Select the text field */
copyText.select();

/* Copy the text inside the text field */
document.execCommand("Copy");

/* Alert the copied text */

}
