document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  let loaderInner = document.querySelector('.preloader-inner');
  let loader = document.querySelector('.preloader');
  window.onload = function () {
    setTimeout(function () {
      loader.style.display = 'none';
      loaderInner.style.width = '0%';
    },2000)
  };

  // CUSTOM CURSOR JS
  let innerCursor = document.querySelector(".inner-cursor");
  let outerCursor = document.querySelector(".outer-cursor");

  document.addEventListener("mousemove", moveCursor);

  function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
  }

  let growItems = Array.from(document.querySelectorAll("a, h1, p, button"));

  growItems.forEach((link) => {
    link.addEventListener("mouseover", () => {
      innerCursor.classList.add("grow-cursor");
    });
    link.addEventListener("mouseleave", () => {
      innerCursor.classList.remove("grow-cursor");
    });
  });

  // navbar menu active link js
  // const activeLink = window.location.pathname;
  // const navLinks = document.querySelectorAll(".custom-navbar .navbar-nav li a");
  // navLinks.forEach((link) => {
  //   if (link.href.includes(`${activeLink}`)) {
  //     link.classList.add("activeLink");
  //   }
  // });

  // Pricing table toggle funtion
    let checkBox = document.getElementById("checkbox");
    let monthPrice = document.getElementsByClassName("month-price");
    let yearPrice = document.getElementsByClassName("year-price");

    checkBox.addEventListener("click", () => {
    for (let i = 0; i < monthPrice.length; i++) {
      
      if (checkBox.checked == true) {
        monthPrice[i].style.display = "block";
        yearPrice[i].style.display = "none";
      }
     else if (checkBox.checked == false) {
        monthPrice[i].style.display = "none";
        yearPrice[i].style.display = "block";
      }
    }
    })

  // Reviews section swiper slider
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    speed:1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // scroll to top
  const toTop = document.querySelector(".scroll-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
})

});
