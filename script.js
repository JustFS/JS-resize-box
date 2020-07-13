const main = document.querySelector(".main");

document.addEventListener('mousedown', (e) => {
  // set mousemove-X
  if (e.target.className == "drag-x" && (window.event != null)) {

    document.onmousemove = (e) => {
      e == null ? e = window.event : '';
      document.querySelector(".box-1").style.flex =
        "0 0" + e.clientX / (main.clientWidth / 100) + "%";
    }
    preventBehavior(e);
  }
  // set mousemove-Y
  else if (e.target.className == "drag-y" && (window.event != null)) {

    document.onmousemove = (e) => {
      e == null ? e = window.event : '';
      document.querySelector(".top").style.flex =
        "0 0" + e.clientY / (main.clientHeight / 100) + "%";
    }
    preventBehavior(e);
  }
})
// stop everthing on mouseup
document.addEventListener('mouseup', (e) => {
  if (e.target != null) {
    document.onmousemove = null;
    document.onselectstart = null;
    e.target.ondragstart = null;
  }
})
// prevent bad behavior on the moving element
const preventBehavior = (e) => {
  document.onselectstart = () => {return false};
  e.target.ondragstart = () => {return false};
  return false;
}