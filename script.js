const main = document.querySelector(".main");
let x = 0;
let y = 0;
let dragElement;

const OnMouseDown = (e) => {
  let target = e.target != null ? e.target : e.srcElement;

  if ((window.event != null) && target.className == "drag-x") {
    x = e.clientX;
    dragElement = target;
    document.onmousemove = OnMouseMoveX;
    document.body.focus();

    document.onselectstart = () => {return false};
    target.ondragstart = () => {return false};
    return false;
  } 
  else if ((window.event != null) && target.className == "drag-y") {
    y = e.clientY;
    dragElement = target;
    document.onmousemove = OnMouseMoveY;
    document.body.focus();

    document.onselectstart = () => {return false};
    target.ondragstart = () => {return false};
    return false;
  }
}

const OnMouseMoveX = (e) => {
  e == null ? e = window.event : '';
  document.querySelector(".box-1").style.flex =
    "0 0" + e.clientX / (main.clientWidth / 100) + "%";
}

const OnMouseMoveY = (e) => {
  if (e == null) var e = window.event;
  document.querySelector(".top").style.flex =
    "0 0" + e.clientY / (main.clientHeight / 100) + "%";
}

const OnMouseUp = () => {
  if (dragElement != null) {
    document.onmousemove = null;
    document.onselectstart = null;
    dragElement.ondragstart = null;
    dragElement = null;
  }
}

const InitDragDrop = () => {
  document.onmousedown = OnMouseDown;
  document.onmouseup = OnMouseUp;
}

InitDragDrop();