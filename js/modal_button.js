let modal = document.getElementById("myModal");
let btn = document.getElementById("showModal");
let span = document.getElementsByClassName("close")[0];
let modalContent = document.getElementsByClassName('modal-content')[0];
let counterClose = 0;

btn.onclick = function() {
  modal.style.display = "block";
  counterClose = 0;
  modalContent.style = 'visibility: hidden;'
}

span.onclick = function() {
  modal.style.display = "none";
}

span.onmouseover = function() {
    this.style.float=(this.style.float == 'left') ? 'right' : 'left';
    counterClose ++;
    if (counterClose > 2) {
        modalContent.style = 'visibility: visible;'
    }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// let modalContent = document.getElementsByClassName('modal-content')[0];
// modalContent.style = 'background-image:url(img/boromir.png);'