// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling (Made to vanilla js)
document.addEventListener('DOMContentLoaded', function () {
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }

    window.addEventListener('scroll', function () {
        document.querySelectorAll('.animate__animated').forEach(function (element, index) {

            // Switch case to specific elements
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
