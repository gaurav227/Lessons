/*
$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })

});



$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css('color', '#C3FF00')
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css('color', '#EFEFEF')
  })

});



$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css({
     color: '#C3FF00',
     backgroundColor: '#535353'
    })
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })
  })

});

*/ 

$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css({
     color: '#C3FF00',
     backgroundColor: '#535353'
    })

    $('.menu-button').animate({
      fontSize: '24px'
    }, 200)
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })

    $('.menu-button').animate({
      fontSize: '18px'
    }, 200)
  })

});
