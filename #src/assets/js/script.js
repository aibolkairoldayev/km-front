//preloader close
$(document).ready(()=>{
    $('.preloader').fadeOut('slow', function() {
        $(this).remove();
    });

});

setTimeout(function() {
    $('.preloader').fadeOut('slow', function() {
        $(this).remove();
    });
}, 3000);

//scrollbar in docs main page
$(function () {
  const $slider = $('.asbest__docs');
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  $slider.on('mousedown', function (e) {
    isDown = true;
    startX = e.pageX;
    scrollLeft = this.scrollLeft;
    // Отключаем выделение текста
    $(this).addClass('no-select');
  });

  $(document).on('mouseup', function () {
    isDown = false;
    $slider.removeClass('no-select');
  });

  $(document).on('mousemove', function (e) {
    if (!isDown) return;
    const x = e.pageX;
    const walk = (x - startX) * 1.5; // Чувствительность
    $slider[0].scrollLeft = scrollLeft - walk;
  });
});

//tab in main page
$(function () {
  $('.asbest__tab').on('click', function () {
    const index = $(this).index('.asbest__tab');

    // Если уже активный — ничего не делаем
    if ($(this).hasClass('active')) return;

    // Снимаем .active со всех табов и контента
    $('.asbest__tab').removeClass('active');
    $('.asbest__content').removeClass('active');

    // Назначаем .active текущим по индексу
    $('.asbest__tab').eq(index).addClass('active');
    $('.asbest__content').eq(index).addClass('active');
  });
});

