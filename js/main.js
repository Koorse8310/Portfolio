// get the colors container of the color swicher
let colorsContainer = document.getElementById("colors");
// declare colors for the color switcher
let colors = [
  "#623B5A",
  "#89608E",
  "#BA9593",
  "#5FB49C",
  "#107E7D",
  "#084C61",
  "#56A3A6",
  "#4F6D7A",
  "#E3B505",
  "#DB504A",
];

//add the colors to the colors container
colors.forEach(function (element) {
  colorsContainer.innerHTML += ` <div class="color">
   <div id="${element}" style="background-color:${element}"></div>
</div>`;
});

// scale the color when clicked to appear active
$(".color div").click(function () {
  $(".color div").removeClass("scale");
  $(this).addClass("scale");
  let color = $(this).attr("id");
  document.body.style.setProperty("--theme_color", color);
});

//reset active color and set theme color to default color when reset button is clicked
$("#reset-btn").click(function () {
  $(".color div").removeClass("scale");
  document.body.style.setProperty("--theme_color", "#20c997");
});

//Toggle the sidebar of the color swicher when the side button is clicked
$(".side-button").click(function () {
  if ($(this).css("right") == "0px") {
    $(this).animate({ right: $('.sidebar').outerWidth() }, 500);
    $(".sidebar").animate({ right: "0" }, 500);
  } else {
    $(this).animate({ right: "0" }, 500);
    $(".sidebar").animate({ right: -$('.sidebar').outerWidth() }, 500);
  }
});

//scroll to top of the page when the scroll-to-top button is clicked
$(".scroll-to-top").click(function (e) {
  e.preventDefault();
  $("body, html").animate(
    {
      scrollTop: 0,
    },
    2000
  );
});

//add active class to menu links when they are clicked
$(".menu li").click(function (e) {
  e.preventDefault();
  $('.menu li').removeClass('active');
  $(this).addClass('active');
  if($(this).attr('data-filter')=='all')
  {
    $('#gallery').addClass('all-layout');
  }
  else{
    $('#gallery').removeClass('all-layout');
  }
});


//add active class to nav links when clicked and scroll to the top of the corresponding section
$(".nav-links a").click(function (e) {
  e.preventDefault();

  $(".nav-links li").removeClass("active");
  $(this).parent().addClass("active");

  let sectionSelector = $(this).attr("href");
  let offset = $(sectionSelector).offset().top;

  $("body, html").animate(
    {
      scrollTop: offset,
    },
    2000
  );
});


//scroll down to the about section when the scroll-down button is clicked
$('.scroll-button a').click(function(e){
  e.preventDefault();
  let offset = $('#about').offset().top;

  $("body, html").animate(
    {
      scrollTop: offset,
    },
    2000
  );
});


//scroll to contact section when the hire-me button is clicked
$('.hire-button').click(function(e){
  e.preventDefault();
  let offset = $('#contact').offset().top;

  $("body, html").animate(
    {
      scrollTop: offset,
    },
    2000
  );
});


//check for active section when scrolling and add active class to corresponding nav-link
$(window).scroll(function () {
  if (window.scrollY > 70) {
    $("#navbar").attr("style", "top:-70px");
  }
  if (window.scrollY > 150) {
    $("#navbar").addClass("navbar-scroll");
    document.querySelectorAll('section').forEach((element,index)=>{
      if(window.scrollY >= element.offsetTop-70)
      {
        $(".nav-links li").removeClass("active");
       $('.nav-links li').eq(index).addClass('active');
      }
    })
  } else {
    $("#navbar").removeClass("navbar-scroll");
    $("#navbar").attr("style", "top:0");
  }
});


//toggle main navbar when the navbar-button is clicked
let menuOpen=false;

$(".nav-button").click(function () {
  if (!menuOpen) {
    $(".nav-button").addClass('open');
    $(".nav-links").addClass('open');
    menuOpen=true;
  } else {
    $(".nav-button").removeClass('open');
    $(".nav-links").removeClass('open');
    menuOpen=false;
  }
});

//disable body scroll when terms link is clicked
$('#termsLink').click(()=>{
  document.querySelector("body, html").style.overflow = 'hidden'; 
});

//enable body scroll when the close button of modals is clicked
$('.btn-close').click(()=>{
  document.querySelector("body, html").style.overflow = 'visible'; 
})

//enable body scroll when the non-content section of the modal is clicked
$('.modal').click(()=>{
  document.querySelector("body, html").style.overflow = 'visible'; 
})

//fadeout preloader when the document is fully loaded
window.onload = () => {
  $('.spinner').fadeOut();
  $('.preloader').delay(400).fadeOut('slow');
}