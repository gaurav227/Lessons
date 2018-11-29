/*
$(document).ready(() => {

});
*/

//We have several thumbnail images with a class of 'product-photo', but they don't appear in the site because their display property is
//set to none in style.css . Let's start by using jQuery to target every '.product-photo'.

/*
$(document).ready(() => {
  $('.product-photo').show()
});
*/

//.Now that we have targeted all '.product-photo's, let's call the jQuery .show() method on them to make them appear.


//Inside our ready callback function in the main.js file, use jQuery to select the #nav-dropdown element.

//Call the .hide() method on the '#nav-dropdown' element.

/*
$(document).ready(() => {
  $('#nav-dropdown').hide()
});

*/

//let's dive a bit deeper into syntax. You've probably noticed the $ symbol before anything we target. The $ symbol
// is an alias for the jQuery function. The $ symbol and jQuery are interchangeable.

//In the .ready() callback function in main.js, delete $('#nav-dropdown').hide().

//In the same place, create a variable called $navDropdown and store the '#nav-dropdown' jQuery object inside it.

//Finally, call .hide() on $navDropdown.

$(document).ready(() => {
  const $navDropdown = $('#nav-dropdown')
  $navDropdown.hide()
});
