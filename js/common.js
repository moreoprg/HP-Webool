window.onunload = function () {};
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 769) {
  } else {
    $("header .drawer").click(function () {
      $("body").toggleClass("nav-open");
      $("header .header-nav").fadeToggle(200);
    });
    $("header li a").click(function () {
      $("body").toggleClass("nav-open");
      $("header .header-nav").fadeToggle(200);
    });
  }
});

// ローディングアニメーション
const loadAnime = $("#loading-wrapper");
$(window).on("load", function () {
  loadAnime.delay(1200).fadeOut(700);
});

function stopload() {
  loadAnime.delay(1000).fadeOut(700);
}
setTimeout("stopload()", 10000);

// page-topのworksスライダー
$(".works-slide").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slideToScroll: 1,
  infinite: true,
  slidesToScroll: 1,
  infinite: true,
  dots: true,

  responsive: [
    {
      breakpoint: 768, // ブレイクポイントを指定
      settings: {
        slidesToShow: 2,
        speed: 600,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// page-topのlinkの文字色変更
$(".page-link_txt").on("mouseenter", function () {
  $(this).addClass("link-txt_color");
});
$(".link-item").on("mouseleave", function () {
  $(".page-link_txt").removeClass("link-txt_color");
});

// 事業内容フェードイン
function fadeIn() {
  // フェードレフト
  $(".fadeLeftTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeLeft");
    } else {
      $(this).removeClass("fadeLeft");
    }
  });

  // フェードライト
  $(".fadeRightTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeRight");
    } else {
      $(this).removeClass("fadeRight");
    }
  });
}

$(window).scroll(function () {
  // スクロールしたら
  fadeIn(); // 関数を実行
});

// 制作実績テキスト表示
$(function () {
  $(".works-show").on("mouseenter", function () {
    $(this).find(".works-item_txt").slideDown(800);
  });
});
