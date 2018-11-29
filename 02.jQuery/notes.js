/*
Event Handlers

Now that we've got jQuery up and running, let's give it a little gas! The jQuery .on() method adds event handlers to jQuery objects.
The method takes two parameters: a string declaring the event to listen for (the handler) and a callback function to fire when the event is detected.

$('#login').on('click', () => {
  $loginForm.show();
})

In the example above, we use .on() to add the click event handler to the #login element.
Inside of the callback function, we use the .show() method to show the jQuery object saved in the $loginForm variable.


$(document).ready(() => {
  const $menuButton = $('.menu-button');
  const $navDropdown = $('#nav-dropdown');
})

*/


//The .ready() callback function in main.js contains variables for the menu button in the navigation bar (.menu-button) and the dropdown menu (#nav-dropdown).
//Call the .on() method on the $menuButton variable with the first parameter equal to 'click' and the second parameter as an empty callback function.


//In the callback function of $menuButton's .on() event handler, show $navDropdown.
//Run the code to verify that clicking the .menu-button div makes the #nav-dropdown show.

$(document).ready(() => {
  const $menuButton = $('.menu-button');
  const $navDropdown = $('#nav-dropdown');

  $menuButton.on('click', () => {
    $navDropdown.show();
  })

})
