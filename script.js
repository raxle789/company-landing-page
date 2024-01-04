$(document).ready(function () {
  // Navbar Handling
  const navbar = $("#mainNavbar");
  const logo = $(".light-logo");
  const a_links = $(".nav-link1");
  const button = $(".get-access-button");
  const imgElement1 = $("<img>")
    .attr("src", "./assets/menu-icon.svg")
    .attr("alt", "menu-icon")
    .attr("class", "menu-icon");
  const imgElement2 = $("<img>")
    .attr("src", "./assets/menu-icon2.svg")
    .attr("alt", "menu-icon")
    .attr("class", "menu-icon");
  const scrollOffset = 100;

  function handleScroll() {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > scrollOffset) {
      navbar.addClass("scrolled");
      logo.addClass("dark-logo");
      a_links.addClass("nav-link1-dark");
      button.addClass("get-access-button-dark");
      $(".menu-icon").remove();
      $(".navbar-toggler").append(imgElement2);
    } else {
      navbar.removeClass("scrolled");
      logo.removeClass("dark-logo");
      a_links.removeClass("nav-link1-dark");
      button.removeClass("get-access-button-dark");
      $(".menu-icon").remove();
      $(".navbar-toggler").append(imgElement1);
    }
  }

  // Call handleScroll function when scrolled
  $(document).scroll(handleScroll);

  // Carousel Handling
  const carouselInner = $(".carousel-inner");
  let currentIndex = 0;
  const screenWidth = $(window).width();

  if (screenWidth > 1100) {
    sliderNumber = 1;
  } else if (screenWidth > 500 && screenWidth <= 1100) {
    sliderNumber = 4;
  } else if (screenWidth > 321 && screenWidth <= 500) {
    sliderNumber = 6;
  }

  const button_prev = $(".arrow-prev");
  const button_next = $(".arrow-next");
  let directionNumber = 1;

  function prevSlide(direction) {
    if (currentIndex <= 0) {
      currentIndex = 0;
    } else if (currentIndex <= sliderNumber) {
      currentIndex -= direction;
    }

    const translateValue = -currentIndex * 13 + "%";
    carouselInner.css("transform", "translateX(" + translateValue + ")");
  }

  function nextSlide(direction) {
    if (currentIndex <= sliderNumber) {
      currentIndex += direction;
    } else if (currentIndex > sliderNumber) {
      currentIndex = 0;
    }

    const translateValue = -currentIndex * 13 + "%";
    carouselInner.css("transform", "translateX(" + translateValue + ")");
  }

  button_prev.click(() => {
    prevSlide(directionNumber);
  });
  button_next.click(() => {
    nextSlide(directionNumber);
  });
});
