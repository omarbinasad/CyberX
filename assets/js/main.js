document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  let loaderInner = document.querySelector(".preloader-inner");
  let loadingText = document.querySelector(".loading-text");
  let loader = document.querySelector(".preloader");

  setTimeout(function () {
    loaderInner.style.animation = "fadeOut 0.5s ease-in-out forwards";
    loadingText.style.animation = "fadeOut 0.5s ease-in-out forwards";
    loaderInner.style.width = "0%";
    loader.style.opacity = "0";
  }, 1500);

  // Pricing table toggle funtion
  let checkBox = document.getElementById("checkbox");
  let monthPrice = document.getElementsByClassName("month-price");
  let yearPrice = document.getElementsByClassName("year-price");

  checkBox.addEventListener("click", () => {
    for (let i = 0; i < monthPrice.length; i++) {
      if (checkBox.checked == true) {
        monthPrice[i].style.display = "block";
        yearPrice[i].style.display = "none";
      } else if (checkBox.checked == false) {
        monthPrice[i].style.display = "none";
        yearPrice[i].style.display = "block";
      }
    }
  });

  // Reviews section swiper slider
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    speed: 1000,
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

  // contact form
  const contactForm = document.getElementById("contact-form");
  const firstName = document.getElementById("inputFirstName");
  const lastName = document.getElementById("inputLastName");
  const email = document.getElementById("inputEmail");
  const phone = document.getElementById("inputPhoneNumber");
  const subject = document.getElementById("inputSubject");
  const message = document.getElementById("inputMessage");
  const notificationToast = document.getElementById("notification-toast");
  const notificationText = document.querySelector(".notification-text");
  const notificationIcon = document.querySelector(".notification-icon");
  const toast = new bootstrap.Toast(notificationToast);

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    toast.show();
    if (
      firstName.value == "" ||
      email.value == "" ||
      phone.value == "" ||
      message.value == ""
    ) {
      notificationToast.style.color = "var(--color-error)";
      notificationText.innerText = "Field can't be empty";
      notificationIcon.classList.add("fa-triangle-exclamation");
      notificationIcon.classList.remove("fa-square-check");
    } else {
      notificationToast.style.color = "var(--color-success)";
      notificationText.innerText = "Successfully submitted";
      notificationIcon.classList.add("fa-square-check");
      notificationIcon.classList.remove("fa-triangle-exclamation");
      notificationToast.classList.add("success");
      console.log(
        `First Name : ${firstName.value}, Last Name : ${lastName.value}, Phone Number : ${phone.value}, Subject : ${subject.value}, Message : ${message.value}
       `
      );
    }
  });

  // Newsleter form
  const newsletterForm = document.querySelector(".newsletter-form");
  const subscribeEmail = document.querySelector("#inputSubEmail");

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    toast.show();
    if (subscribeEmail.value == "") {
      notificationToast.style.color = "var(--color-error)";
      notificationText.innerText = "Field can't be empty";
      notificationIcon.classList.add("fa-triangle-exclamation");
      notificationIcon.classList.remove("fa-square-check");
    } else {
      notificationToast.style.color = "var(--color-success)";
      notificationText.innerText = "Successfully Subscribed";
      notificationIcon.classList.add("fa-square-check");
      notificationIcon.classList.remove("fa-triangle-exclamation");
      notificationToast.classList.add("success");
      console.log(`Email : ${subscribeEmail.value}`);
    }
  });

  // scroll to top
  const toTop = document.querySelector(".scroll-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });
  // Aos
  AOS.init();
});
