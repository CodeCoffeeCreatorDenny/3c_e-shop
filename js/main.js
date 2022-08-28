$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt="arrow right" /></button>',
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass(
      'tabs-content--active'
    );
    $($(this).parent().parent().siblings().find('div')).removeClass(
      'tabs-content--active'
    );

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');
  });

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active');
  });

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt="arrow right" /></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  });

  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 5000,
    max: 100000,
  });

  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper-list');
    $('.catalog__inner-list .product-item__img').removeClass(
      'have-another-sort'
    );
  });
  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper-list');
    $('.catalog__inner-list .product-item__img').addClass('have-another-sort');
  });

  $('.rate-yo').rateYo({
    ratedFill: '#0C970C',
    spacing: '7px',
    normalFill: '#c4c4c4',
  });

  $('.menu__btn').on('click', function () {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle();
  });
});
