// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling (Made to vanilla)
document.addEventListener('DOMContentLoaded', function () {
    // Check if element is scrolled into view
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Partially visible elements return true:
        var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }
    // If element is scrolled into view, fade it in
    window.addEventListener('scroll', function () {
        document.querySelectorAll('.animate__animated').forEach(function (element, index) {

            if (isScrolledIntoView(element) === true) {
                switch (element.id) {
                    case "whatArePlastics":
                        {
                            element.classList.add('animate__fadeInUp');
                        }
                        break;
                    case "whatArePlasticsDesc":
                        {
                            element.classList.add('animate__fadeInUp');
                        }
                        break;
                    case "card1":
                        {
                            element.classList.add('animate__fadeInUp');
                        }
                        break;
                    case "card2":
                        {
                            element.classList.add('animate__fadeInUp');
                        }
                        break;
                    case "card3":
                        {
                            element.classList.add('animate__fadeInUp');
                        }
                        break;
                }
            }
        });
    });
})
