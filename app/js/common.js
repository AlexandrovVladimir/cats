$(document).ready(function() {
  $('.cats-item-filled').on('click', function(event) {
    event.preventDefault();

    let filled = $(this);

    if (filled.hasClass('active')) {
      filled.removeClass('active');
      $(this).closest('.cats-list__item').removeClass('on-active');
    } else {
      filled.addClass('active');
      $(this).closest('.cats-list__item').addClass('on-active');
    }

    if ($(this).closest('.cats-list__item').hasClass('disabled')) {
      $(this).removeClass('active');
      $(this).unbind('focus');
      $(this).closest('.cats-list__item').removeClass('on-active');
    }
  });

  $('.cats-list__message_link').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.cats-list__item').addClass('on-active');
    $(this).closest('.cats-list__item').find('.cats-item-filled').addClass('active');
  });

  // window.addEventListener('resize', function() {
  //   sliderActivated();
  // });
  // sliderActivated();
  //
  // function sliderActivated() {
  //   if ($(window).width() < 1200) {
  //     $('.cats-list').slick({
  //       infinite: true,
  //       slidesToScroll: 1,
  //       arrow: true
  //     });
  //   } else {
  //     if ($('.cats-list').hasClass('slick-initialized')) {
  //       $('.cats-list').slick('destroy');
  //     }
  //   }
  // }
});