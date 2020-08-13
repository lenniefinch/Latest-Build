//JS Nav & Burger Animation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

//Hulk
$("a[href='#bottom']").click(function () {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});

//Page Load Alert
  $(document).ready(function(){
    alert('This Website is still a work in progress');
  });
