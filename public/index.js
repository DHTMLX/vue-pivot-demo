let intervalId;

function addButtons() {
  const menuElement = document.getElementsByClassName("css-11sh1n2")[0];

  if (menuElement) {
    clearInterval(intervalId);
  } else {
    return;
  }

  let div = document.createElement("div");
  div.innerHTML = "<button id='btn-trial'><span>Free trial</span></button>";
  menuElement.after(div);

  const btnTrial = document.getElementById("btn-trial");
  btnTrial.addEventListener("click", function () {
    window.open("https://dhtmlx.com/docs/products/dhtmlxPivot/download.shtml", "_blank");
  });
}

window.addEventListener("load", function () {
  intervalId = setInterval(addButtons, 100);
});
