//prelouder and main page animation
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

//lang open/close
$(document).ready(function() {
  // Открытие/закрытие дропдауна по клику на текущий язык
  $('.header__lang--current').on('click', function(e) {
    e.stopPropagation();
    $('.header__lang--other').toggleClass('active');
  });

  // Закрытие дропдауна при клике на элемент языка
  $('.header__lang--item').on('click', function() {
    if (!$(this).hasClass('active')) {
      $('.header__lang--other').removeClass('active');
    }
  });

  // Закрытие при клике вне дропдауна
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.header__lang').length) {
      $('.header__lang--other').removeClass('active');
    }
  });
});


//burger lang open/close
$('.burger__lang--current').click(()=> {
    $('.burger__lang--other').toggleClass('show')
})

// header fixed on scroll
$(window).on('scroll', function () {
  if (!$('.burger').hasClass('open')) { // если бургер закрыт
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  } else {
    $('.header').addClass('fixed'); // при открытом бургере фикс всегда
  }
});

// burger open/close
function toggleBurger() {
  $('.burger').toggleClass('open');
  $('.burger__btn').toggleClass('open');

  if ($('.burger').hasClass('open')) {
    $('body').css('overflow', 'hidden');
    $('.header').addClass('fixed'); // фиксируем хедер при открытии
  } else {
    $('body').css('overflow', '');

    // если вверху страницы, убираем fixed
    if ($(window).scrollTop() === 0) {
      $('.header').removeClass('fixed');
    }
    // если не вверху, оставляем fixed
  }
}

$('.burger__wrapper').click(() => {
  toggleBurger();
});

//container left margin
var wholeWidth = $(window).width();
var containerWidth = $('.container').width();
var containerMargin = (wholeWidth - containerWidth) / 2;
$('.history__title').css('margin-left', containerMargin + 'px');
$('.history__slider').css('margin-left', containerMargin + 'px');
$('.standart__title').css('margin-left', containerMargin + 'px');
$('.standart__slider').css('margin-left', containerMargin + 'px');

//video modal close/open
if ($('.about__video').length) {
    function openVideo() {
        $('.about__video').addClass('show');
        $('body').css('overflow', 'hidden');
    }
    function closeVideo() {
        $('.about__video').removeClass('show');
        $('body').css('overflow', 'unset');
    }
    $('.about__video--wrapper').click(()=> {
        closeVideo()
    })
}

//about page persons modal open/close
$(document).ready(function () {
  // Открытие модального окна
  $('.corporate__item--info').on('click', function () {
    const index = $('.corporate__item--info').index(this); // Получаем индекс кликнутого элемента

    $('.modal2').addClass('show'); // Показываем модалку

    // Активируем соответствующий modal2__item
    $('.modal2__item').removeClass('active').eq(index).addClass('active');
  });

  // Закрытие модального окна при клике на modal2__close или modal2__wrapper
  $('.modal2__close, .modal2__wrapper').on('click', function () {
    $('.modal2').removeClass('show'); // Скрываем модалку
    $('.modal2__item').removeClass('active'); // Убираем активный класс
  });
});



//main tab links func
$(document).ready(function () {
  $('.tab-link').on('click', function (e) {
    e.preventDefault();

    const index = $('.tab-link').index(this); // индекс кликнутой табы
    const target = $('.tab-destiny').eq(index); // соответствующий блок

    if (target.length) {
     let headerOffset;

      if ($(window).width() > 768) {
        headerOffset = 70;
      } else {
        headerOffset = 85;
      }
       // фиксированный отступ от верха
      const targetPosition = target.offset().top - headerOffset;

      $('html, body').scrollTop(targetPosition);
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // мгновенно
      });
    }
  });
});

//news page tabs func
$(document).on('click', '.news2__tab', function () {
  const selectedCat = $(this).data('cat');

  // 1. Активируем нужный таб
  $('.news2__tab').removeClass('active');
  $(this).addClass('active');

  // 2. Показываем / скрываем элементы в зависимости от выбранного data-cat
  if (selectedCat === 'all') {
    $('.news2__item').addClass('active');
  } else {
    $('.news2__item').each(function () {
      const itemCat = $(this).data('item');
      if (itemCat === selectedCat) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }
});


//asfalt page video play
$(document).ready(function () {
    $('.asfalt__video--cover svg').on('click', function () {
        const $cover = $(this).closest('.asfalt__video--cover');
        const $videoContainer = $cover.closest('.asfalt__video');
        const $iframe = $videoContainer.find('iframe');
        const src = $iframe.attr('src');

        // Убираем обложку
        $cover.addClass('hide');

        // Перезапускаем iframe с autoplay
        const autoplaySrc = src.includes('autoplay=1') ? src : src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
        $iframe.attr('src', autoplaySrc);
    });
});


//taimer in works page

$(function(){
    const $hidden = $('.works__hidden');
    const $show = $('.works__show');
    const now = new Date();
    const targetText = $hidden.text().trim(); // "23:00"
    const [hours, minutes] = targetText.split(':').map(Number);

    let targetDate = new Date();
    targetDate.setHours(hours);
    targetDate.setMinutes(minutes);
    targetDate.setSeconds(0);
    targetDate.setMilliseconds(0);

    // Если текущее время уже позже target, ставим на следующий день
    if (targetDate <= now) {
        targetDate.setDate(targetDate.getDate() + 1);
    }

    function updateTimer() {
        const current = new Date();
        let diff = Math.floor((targetDate - current) / 1000); // в секундах

        if (diff < 0) diff = 0;

        const h = String(Math.floor(diff / 3600)).padStart(2, '0');
        const m = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
        const s = String(diff % 60).padStart(2, '0');

        $show.text(`${h}:${m}:${s}`);

        if (diff === 0) {
            clearInterval(timer);
        }
    }

    updateTimer(); // первая отрисовка сразу
    const timer = setInterval(updateTimer, 1000);
});

// to up btn func
$(document).ready(function () {
  const $ups = $('.ups');

  // Отслеживание скролла
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
      $ups.addClass('show');
    } else {
      $ups.removeClass('show');
    }
  });

  // Клик по кнопке для плавного возврата к верху
  $ups.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500); // 500 = скорость в мс
  });
});

// open/close modal
function openModal1() {
    $('.modal1').addClass('open');
    $('body').css('overflow', 'hidden');
}
function closeModal1() {
    $('.modal1').removeClass('open');
    $('body').css('overflow', 'unset');
}
$('.modal1__wrapper').click(()=> {
    closeModal1()
})

//develop page map moving
$(document).ready(function() {
    const $map = $('.map2__bg');
    let isDragging = false;
    let startX, startY;
    let currentX = 0, currentY = 0;

    // Масштаб на 15%
    let scale = 1.15;
    $map.css('transform', `scale(${scale}) translate(0px, 0px)`);
    let mapWidth = $map.width() * scale;
    let mapHeight = $map.height() * scale;
    let wrapperWidth = $map.parent().width();
    let wrapperHeight = $map.parent().height();

    // Вычисляем максимальные сдвиги, чтобы не оголять края
    let maxX = (mapWidth - wrapperWidth) / 2;
    let maxY = (mapHeight - wrapperHeight) / 2;

    $map.on('mousedown', function(e) {
        isDragging = true;
        startX = e.pageX - currentX;
        startY = e.pageY - currentY;
        e.preventDefault();
    });

    $(document).on('mousemove', function(e) {
        if (isDragging) {
            let x = e.pageX - startX;
            let y = e.pageY - startY;

            // Ограничиваем движение в пределах карты
            x = Math.max(-maxX, Math.min(maxX, x));
            y = Math.max(-maxY, Math.min(maxY, y));

            currentX = x;
            currentY = y;

            $map.css('transform', `scale(${scale}) translate(${x}px, ${y}px)`);
        }
    });

    $(document).on('mouseup', function() {
        isDragging = false;
    });

    // Для мобильных, если нужно
    $map.on('touchstart', function(e) {
        isDragging = true;
        const touch = e.originalEvent.touches[0];
        startX = touch.pageX - currentX;
        startY = touch.pageY - currentY;
    });

    $(document).on('touchmove', function(e) {
        if (isDragging) {
            const touch = e.originalEvent.touches[0];
            let x = touch.pageX - startX;
            let y = touch.pageY - startY;

            x = Math.max(-maxX, Math.min(maxX, x));
            y = Math.max(-maxY, Math.min(maxY, y));

            currentX = x;
            currentY = y;

            $map.css('transform', `scale(${scale}) translate(${x}px, ${y}px)`);
        }
    });

    $(document).on('touchend', function() {
        isDragging = false;
    });
});

//map4 points activation
$('.mark3').on('click', function() {
    let index = $('.mark3').index(this);
    $('.social__info').removeClass('active').eq(index).addClass('active');
});


//map 4 navigation
$(document).ready(function() {
    const $map = $('.social__map--bg');
    let isDragging = false;
    let startX, startY;
    let currentX = 0, currentY = 0;

    // Масштаб на 15%
    let scale = 1.15;
    $map.css('transform', `scale(${scale}) translate(0px, 0px)`);
    let mapWidth = $map.width() * scale;
    let mapHeight = $map.height() * scale;
    let wrapperWidth = $map.parent().width();
    let wrapperHeight = $map.parent().height();

    // Вычисляем максимальные сдвиги, чтобы не оголять края
    let maxX = (mapWidth - wrapperWidth) / 2;
    let maxY = (mapHeight - wrapperHeight) / 2;

    $map.on('mousedown', function(e) {
        isDragging = true;
        startX = e.pageX - currentX;
        startY = e.pageY - currentY;
        e.preventDefault();
    });

    $(document).on('mousemove', function(e) {
        if (isDragging) {
            let x = e.pageX - startX;
            let y = e.pageY - startY;

            // Ограничиваем движение в пределах карты
            x = Math.max(-maxX, Math.min(maxX, x));
            y = Math.max(-maxY, Math.min(maxY, y));

            currentX = x;
            currentY = y;

            $map.css('transform', `scale(${scale}) translate(${x}px, ${y}px)`);
        }
    });

    $(document).on('mouseup', function() {
        isDragging = false;
    });

    // Для мобильных, если нужно
    $map.on('touchstart', function(e) {
        isDragging = true;
        const touch = e.originalEvent.touches[0];
        startX = touch.pageX - currentX;
        startY = touch.pageY - currentY;
    });

    $(document).on('touchmove', function(e) {
        if (isDragging) {
            const touch = e.originalEvent.touches[0];
            let x = touch.pageX - startX;
            let y = touch.pageY - startY;

            x = Math.max(-maxX, Math.min(maxX, x));
            y = Math.max(-maxY, Math.min(maxY, y));

            currentX = x;
            currentY = y;

            $map.css('transform', `scale(${scale}) translate(${x}px, ${y}px)`);
        }
    });

    $(document).on('touchend', function() {
        isDragging = false;
    });
});
const waveData = {
  "2021": [10, 70, 30, 60],
  "2022": [60, 70, 50, 80],
  "2023": [80, 60, 35, 55],
  "2024": [55, 40, 70, 50],
  "2025": [50, 65, 45, 70]
};

$('.year').each(function(){
  const year = $(this).data('year');
  const points = waveData[year];
  const w = $(this).width();
  const h = $(this).height();
  const stepX = w / 3;

  let polyPoints = `0,${h} `;
  points.forEach((p, i) => {
    const x = i * stepX;
    const y = h - (p/100 * h);
    polyPoints += `${x},${y} `;
  });
  polyPoints += `${w},${h}`;
  $(this).find('polygon').attr('points', polyPoints).attr('fill', 'url(#grad)');
});

// number increase animation
$(document).ready(function() {
    function animateCounter($el) {
        let text = $el.text().trim();
        let numMatch = text.match(/\d+/);
        if (!numMatch) return;

        let target = parseInt(numMatch[0], 10);
        let duration = 2000; // длительность анимации (мс)
        let frameRate = 30;  // кадров в секунду
        let frames = duration / (1000 / frameRate);
        let current = 0;
        let increment = target / frames;

        let originalText = text;
        let prefix = originalText.match(/^[^\d]+/)?.[0] || '';
        let suffix = originalText.match(/[^\d]+$/)?.[0] || '';

        let interval = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            $el.text(prefix + Math.floor(current) + suffix);
        }, 1000 / frameRate);
    }

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function checkCounters() {
        $('.counter-number').each(function() {
            let $this = $(this);
            if (!$this.hasClass('animated') && isElementInViewport(this)) {
                $this.addClass('animated');
                animateCounter($this);
            }
        });
    }

    $(window).on('scroll resize load', checkCounters);
});


//develop page slick animation from left
$(document).ready(function() {
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function animateMap2() {
        $('.map2__cont').each(function() {
            let $this = $(this);
            if (!$this.hasClass('show') && isElementInViewport(this)) {
                $this.addClass('show');
            }
        });
    }

    $(window).on('scroll resize load', animateMap2);
});