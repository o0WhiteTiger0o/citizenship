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