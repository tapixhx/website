// navbar
var header = document.getElementById("navbarSupportedContent1");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-tab");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active-tab", "");
  }
  this.className += " active-tab";
  });
}
// navbar

// news
var header1 = document.getElementById("highlightContainer");
var news = header1.getElementsByClassName("news-body");
for (var i = 0; i < news.length; i++) {
  news[i].addEventListener("click", function() {
  var current1 = document.getElementsByClassName("active-news");
  if (current1.length > 0) { 
    current1[0].className = current1[0].className.replace(" active-news", "");
  }
  this.className += " active-news";
  });
}
// news