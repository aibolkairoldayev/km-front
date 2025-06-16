//preloader close
// $(document).ready(()=>{
//     $('.preloader').fadeOut('slow', function() {
//         $(this).remove();
//     });

// });

// setTimeout(function() {
//     $('.preloader').fadeOut('slow', function() {
//         $(this).remove();
//     });
// }, 3000);

function animateIntroItems() {
  $('.intro__item').each(function(index) {
    setTimeout(() => {
      $(this).addClass('show');
    }, index * 400); // каждая следующая с задержкой 400мс
  });
}

function hidePreloaderAndAnimate() {
  $('.preloader').fadeOut('slow', function() {
    $(this).remove();
    animateIntroItems(); // запуск анимации после удаления прелоудера
  });
}

$(document).ready(() => {
  // двойной вызов, чтобы гарантированно сработало:
  hidePreloaderAndAnimate();
  setTimeout(hidePreloaderAndAnimate, 3000);
});


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

//header fixed func
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 0) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});

//lang open/close
$(document).ready(function() {
  // Клик по текущему языку — переключение класса "актив" у блока с другими языками
  $('.header__lang--current').on('click', function(e) {
    e.stopPropagation();
    $('.header__lang--other').toggleClass('active');
  });

  // Клик по элементу языка
  $('.header__lang--item').on('click', function() {
    // Проверяем, есть ли у кликнутого .header__lang--item класс active
    if (!$(this).hasClass('active')) {
      $('.header__lang--other').removeClass('active');
    }
  });

  // Клик вне меню — закрытие, если оно открыто
  if (!$(e.target).closest('.header__lang').length) {
    $('.header__lang--other').removeClass('active');
  }
});

//burger lang open/close
$('.burger__lang--current').click(()=> {
    $('.burger__lang--other').toggleClass('show')
})

//burger open/close
function toggleBurger() {
  $('.burger').toggleClass('open');
  $('.burger__btn').toggleClass('open');
    if ($('.burger').hasClass('open')) {
      $('body').css('overflow', 'hidden');
  } else {
      $('body').css('overflow', '');
  }
}

$('.burger__wrapper').click(()=> {
  toggleBurger()
})