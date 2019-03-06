$(document).ready(function() {
  $('.cats-list__item').on('click', function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

    if ($(this).hasClass('disabled')) {
      $(this).removeClass('active');
      $(this).unbind('focus');
    }

  });
});