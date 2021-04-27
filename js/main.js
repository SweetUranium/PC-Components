window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("header-fixed", window.scrollY > 0);
})
