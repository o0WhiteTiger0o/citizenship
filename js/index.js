  function hide_show() {
    const getPanel = document.getElementById("panel");
    if (getPanel.style.display === "none") {
        getPanel.style.display = "block";
    } else {
        getPanel.style.display = "none";
    }
  }