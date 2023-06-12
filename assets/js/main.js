document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  let loaderInner = document.querySelector('.preloader-inner');
  let loadingText = document.querySelector('.loading-text');
  let loader = document.querySelector('.preloader');
  let html = document.querySelector('html');
  window.onload = function () {
    setTimeout(function () {
      loader.style.opacity = '0';
      loadingText.style.opacity = '0';
      // loader.style.display = 'none';
      loaderInner.style.width = '0%';
      html.style.overflow="auto";
    },500)
  };


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

  // contact form
  const contactForm = document.getElementById("contact-form")
  const firstName = document.getElementById("inputFirstName")
  const lastName = document.getElementById("inputLastName")
  const email = document.getElementById("inputEmail")
  const phone = document.getElementById("inputPhoneNumber")
  const subject = document.getElementById("inputSubject")
  const message = document.getElementById("inputMessage")
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  const toast = new bootstrap.Toast(toastLiveExample)
  contactForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    if (firstName.value == "" || email.value == "" || phone.value == "" || message.value == "") {
      
   toast.show();
  } else {
    // success toast notification
      toast.show()
    // alert("This form has been successfully submitted!");
    console.log(
      `First Name : ${firstName.value} Phone Number : ${phone.value}`
    );
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
})
// Aos
 AOS.init();

});
