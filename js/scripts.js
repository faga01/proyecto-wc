
    // Función que ejecuta el slideshow de la seccion 1   
        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n)
        }

        function currentSlide(n) {
            showSlides(slideIndex = n)
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var puntos = document.getElementsByClassName("punto");

            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
            }
            for (i = 0; i < puntos.length; i++) {
                puntos[i].className = puntos[i].className.replace(" active", "")
            }
            slides[slideIndex - 1].style.display = "block";
            puntos[slideIndex - 1].className += " active";
        }
        


    // funciión que ejecuta el acordion de la seccion 5

        var acc = document.getElementsByClassName("acordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            })
        }

  