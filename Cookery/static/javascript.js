window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("cookery-logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "70px 10px";
    document.getElementById("cookery-logo").style.fontSize = "35px";
  }
}

