  function hide_show() {
    const getPanel = document.getElementById("panel");
    if (getPanel.style.display === "none") {
        getPanel.style.display = "block";
    } else {
        getPanel.style.display = "none";
    }
  }



  /* Toggle between adding and removing the "responsive" class to topnav when click on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleIframe(index) {
  var iframes = [document.getElementById("myIframe1"), document.getElementById("myIframe2")];
  var buttons = [document.getElementById("showBtn1"), document.getElementById("showBtn2")];
  var iframe = document.getElementById("myIframe" + index);
  var button = document.getElementById("showBtn" + index);
  
  for(var i = 0; i < iframes.length; i++) {
    if(iframes[i] !== iframe) {
      iframes[i].style.display = "none";
      iframes[i].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }
  
  if(iframe.style.display === "none") {
    iframe.style.display = "block";
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  } else {
    iframe.style.display = "none";
    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}