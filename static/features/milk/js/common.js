function main() {
  $('.main__Area').addClass('on');
  $('html,body').animate({ scrollTop: 0, scrollLeft: 0 }, 1);
  //ページトップ
  $('.btnTop').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 500);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.btnTop').css({ bottom: 100 + 'px', opacity: 1 });
    } else {
      $('.btnTop').css({ bottom: 60 + 'px', opacity: 0 });
    }
  });

  $('.js-link').on('click', function (e) {
    //伝播をストップ
    e.stopPropagation();
    e.preventDefault();

    //リンクを取得して飛ばす
    location.href = $(this).attr('data-url');
    //window.open($(this).attr('data-url'))
  });

  /*トグルボックス*/
  $('.btnTitle:not(.none)').on('click', function () {
    $(this).toggleClass('close');
    $(this).next().slideToggle();
  });
  /*
  $('.dateAreaBox__title').on('click', function () {
    $(this).toggleClass('open');
    $(this).next().slideToggle();
  });
  */

  /*スクロールアニメセット*/
  var firstScroll = 0;

  animeSC();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= firstScroll) {
      animeSC();
    }
    $('.navlink').each(function (i) {
      if (
        $(window).scrollTop() >= $('.navlink').eq(i).offset().top - 200 &&
        $(window).scrollTop() <=
          $('.navlink').eq(i).offset().top + $('.navlink').eq(i).outerHeight() - 200
      ) {
        $('nav li').eq(i).addClass('over');
      } else {
        $('nav li').eq(i).removeClass('over');
      }
    });
  });

  function animeSC() {
    if ($(this).scrollTop() >= firstScroll) {
      $('.anime_tate').each(function (i) {
        if (
          $(window).scrollTop() >=
          $('.anime_tate').eq(i).offset().top - $(window).height() * 0.9
        ) {
          $('.anime_tate').eq(i).addClass('active');
        }
      });
      $('.anime_tateR').each(function (i) {
        if (
          $(window).scrollTop() >=
          $('.anime_tateR').eq(i).offset().top - $(window).height() * 0.7
        ) {
          $('.anime_tateR').eq(i).addClass('active');
        }
      });
      $('.anime_tate2').each(function (i) {
        if (
          $(window).scrollTop() >=
          $('.anime_tate').eq(i).offset().top - $(window).height() * 0.7
        ) {
          $('.anime_tate2').eq(i).addClass('active');
        }
      });
      $('.anime_left').each(function (i) {
        if (
          $(window).scrollTop() >=
          $('.anime_left').eq(i).offset().top - $(window).height() * 0.7
        ) {
          $('.anime_left').eq(i).addClass('active');
        }
      });
      $('.anime_right').each(function (i) {
        if (
          $(window).scrollTop() >=
          $('.anime_right').eq(i).offset().top - $(window).height() * 0.7
        ) {
          $('.anime_right').eq(i).addClass('active');
        }
      });
      $('.anime_delay').each(function (i) {
        if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 0.9) {
          $(this)
            .children('.activeBox')
            .each(function (j) {
              $(this)
                .delay(300 * j)
                .queue(function () {
                  $(this).addClass('active').dequeue();
                });
            });
          $(this)
            .find('.active_tate')
            .each(function (j) {
              $(this)
                .delay(300 * j)
                .queue(function () {
                  $(this).addClass('active').dequeue();
                });
            });
        }
      });

      $('.sec').each(function (i) {
        if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 0.9) {
          $(this).addClass('on').dequeue();
        }
      });

      $('.speed_top').each(function (i) {
        if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
          $(this).css({ transform: 'translateY(' + $(window).scrollTop() / 2 + 'px)' });
        }
      });
      $('.speed1').each(function (i) {
        if ($(window).scrollTop() >= $('.speed1').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({
            transform: 'translateY(' + ($(this).offset().top - $(window).scrollTop()) / 10 + 'px)',
          });
        }
      });
      $('.speed1_re').each(function (i) {
        if ($(window).scrollTop() >= $('.speed1_re').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({
            transform: 'translateY(-' + ($(this).offset().top - $(window).scrollTop()) / 5 + 'px)',
          });
        }
      });
      $('.speed1_reH').each(function (i) {
        if ($(window).scrollTop() >= $('.speed1_reH').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({ transform: 'translateY(' + $(window).scrollTop() * 0.5 + 'px)' });
        }
      });

      $('.speedL').each(function (i) {
        if ($(window).scrollTop() >= $('.speedL').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({
            transform: 'translateX(' + ($(this).offset().top - $(window).scrollTop()) / 10 + 'px)',
          });
        }
      });
      $('.speedR').each(function (i) {
        if ($(window).scrollTop() >= $('.speedR').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({
            transform: 'translateX(-' + ($(this).offset().top - $(window).scrollTop()) / 10 + 'px)',
          });
        }
      });
      $('.scale1').each(function (i) {
        if ($(window).scrollTop() >= $('.scale1').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({
            transform: 'scale(1.' + ($(this).offset().top - $(window).scrollTop()) / 10 + ')',
          });
        }
      });

      /*jipjip origin*/

      $('.bg1').each(function (i) {
        if ($(window).scrollTop() >= $('.bg1').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({
            transform: 'translateY(' + ($(this).offset().top - $(window).scrollTop()) / 3 + 'px)',
          });
        }
      });
      $('.bg2').each(function (i) {
        if ($(window).scrollTop() >= $('.bg2').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({
            transform:
              'translateY(' +
              ($(this).offset().top - $(window).scrollTop()) / 2 +
              'px) rotate(60deg)',
          });
        }
      });
      $('.bg3').each(function (i) {
        if ($(window).scrollTop() >= $('.bg3').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({
            transform:
              'translateY(' +
              ($(this).offset().top - $(window).scrollTop()) / 2 +
              'px) rotate(120deg)',
          });
        }
      });
      $('.bg4').each(function (i) {
        if ($(window).scrollTop() >= $('.bg3').eq(i).offset().top - $(window).height() * 1) {
          $(this).css({
            transform: 'translateY(' + ($(this).offset().top - $(window).scrollTop()) / 6 + 'px)',
          });
        }
      });

      $('.topContact__Area--fukidashi').each(function (i) {
        if (
          $(window).scrollTop() >=
          $('.topContact__Area--fukidashi').eq(i).offset().top - $(window).height() * 1
        ) {
          $('.topContact__Area--fukidashi .box').addClass('on');
        }
      });
    }
  }

  /*topHover*/
  function topActionHover() {
    $('.topContents__Feature--AreaTab.active').on({
      mouseenter: function () {
        $(this).find('.hovTxt').stop(true, true).slideDown();
      },
      mouseleave: function () {
        $(this).find('.hovTxt').stop(true, true).slideUp();
      },
    });
  }
  function topActionHoverReset() {
    $('.topContents__Feature--AreaTab.active').off('mouseenter');
    $('.topContents__Feature--AreaTab.active').off('mouseleave');
  }

  /*フッターfunction*/
  function footerAction() {
    $('.listBox__title').on('click', function () {
      if ($(this).next().hasClass('open')) {
        $(this).next().removeClass('open');
      } else {
        $(this).next().addClass('open');
      }
    });
  }
  /*ヘッダーfunction*/
  function headerAction() {
    $('.listBtn').off('mouseenter');
    $('.listBtn').off('mouseleave');
    $('.listBtnLink').on('click', function () {
      $(this).parent().toggleClass('clicks');
      if ($(this).parent().find('ul').hasClass('open')) {
        $(this).parent().find('ul').removeClass('open');
      } else {
        $(this).parent().find('ul').addClass('open');
      }
      return false;
    });
  }
  function headerActionHover() {
    $('.listBtn').removeClass('clicks');
    $('.listBtn ul').removeClass('open');
    $('.listBtnLink').off('click');
    $('.listBtn').on({
      mouseenter: function () {
        $(this).find('ul').addClass('open');
      },
      mouseleave: function () {
        $(this).find('ul').removeClass('open');
      },
    });
  }
  /*sideナビfunction*/
  function sideAction() {
    selectTitle = $('.selectBtn').next().find('.select').text();
    $('.selectBtn').text(selectTitle);
    $('.selectBtn').on('click', function () {
      if ($(this).next().hasClass('open')) {
        $(this).next().removeClass('open');
      } else {
        $(this).next().addClass('open');
      }
    });
  }

  /*sp切り替え*/
  var reBool;
  if ($(window).width() > 980) {
    reBool = true;
  } else {
    reBool = false;
  }

  re();

  $(window).resize(function () {
    re();
  });
  function re() {
    if ($(window).width() > 980) {
      /*スマホリセット*/
      $('.listBox__Area').removeClass('open');
      $('.listBox__title').off('click');
      $('.selectBtn').next().removeClass('open');
      $('.selectBtn').off('click');
      /*スマホリセットここまで*/
      if (reBool === true) {
        $('body').removeClass('openSub');
        $('body').removeClass('side-open');
        $('.menu-trigger').removeClass('active');
        topActionHover();
      }
      reBool = false;
    } else {
      if (reBool === false) {
        topActionHoverReset();
      }
      reBool = true;
    }
  }

  /*メニュー*/
  var fixTop;
  var $body = $('body');
  $('.menu a').on('click', function (e) {
    $('.menu a').toggleClass('active');

    $body.toggleClass('side-open');
    if ($body.hasClass('side-open')) {
      $('.header__Con--nav ul li').each(function (i) {
        $(this)
          .delay(i * 100)
          .queue(function () {
            $(this).addClass('ons').dequeue();
          });
        /*
          setTimeout(function(){
            $('.links').addClass('ons').dequeue();
          },500);
          */
      });
    } else {
      setTimeout(function () {
        $('.header__Con--nav').removeClass('on').dequeue();
      }, 700);
      $('.header__Con--nav ul li').removeClass('ons');
      $('.links').removeClass('ons');
    }
    //$('#headCon').slideToggle();
    if ($('.menu a').hasClass('active')) {
      fixTop = $(window).scrollTop();
      $('body')
        .addClass('noscroll')
        .css('top', -fixTop + 'px');
    } else {
      $('body').removeClass('noscroll');
      $(window).scrollTop(fixTop);
    }
    return false;
  });
  $('.overlay,#headCon__Box--close').on('click', function () {
    $('body').removeClass('noscroll');
    $('body').removeClass('side-open');
    $('.menu a').removeClass('active');
    //$('#headCon').slideToggle();
    $(window).scrollTop(fixTop);
  });

  //スクロール
  //var timepos;
  if ($('#toppage').length != 0) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $('#toppage').height() + 300) {
        $('header').addClass('on');
      } else {
        $('header').removeClass('on');
      }
    });
  }

  //アーカイブ詳細ボタン
  $(document).on('click', '.toggleBtn p', function () {
    $(this).parent().toggleClass('close');
    $(this).parent().prev().slideToggle();
    if ($(this).parent().hasClass('close')) {
      $(this).text('詳細を閉じる');
    } else {
      $(this).text('続きを読む');
    }
  });

  //URLのハッシュ値を取得
  var url = $(location).attr('href');
  if (url.indexOf('#') == -1) {
  } else {
    var url_sp = url.split('#');
    var hash = '#' + url_sp[url_sp.length - 1];
    var tgt = $(hash);
    var pos = tgt.offset().top;
    $('html, body').animate({ scrollTop: pos + 10 }, 500, 'swing');
  }

  //通常のクリック時
  $('a[href^="#"]').click(function () {
    $('body').removeClass('noscroll');
    $('body').removeClass('side-open');
    $('.menu-trigger').removeClass('active');
    //ページ内リンク先を取得
    var href = $(this).attr('href');
    //リンク先が#か空だったらhtmlに
    var hash = href == '#' || href == '' ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top + 10;
    $('body,html').stop().animate({ scrollTop: position }, 500);
  }

  new Swiper('.swiper-container', {
    effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
  });
}

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-KL8HCH6PVM');

window.addEventListener('DOMContentLoaded', function () {
  main();
});
