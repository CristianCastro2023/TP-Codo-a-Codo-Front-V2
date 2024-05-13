document.addEventListener("DOMContentLoaded", function () {
    var acc = document.getElementsByClassName("accordion");
    var i;
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");
  
        var pannel = this.nextElementSibling;
  
        pannel.classList.toggle("active"); // Agrega o elimina la clase .active del contenedor .pannel
      });
    }
  });