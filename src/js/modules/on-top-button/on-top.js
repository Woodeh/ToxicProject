window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (scrollTop > 0) {
      
      window.scrollTo(0, scrollTop - (scrollTop * 0.1));
      window.requestAnimationFrame(topFunction);
    }
  }