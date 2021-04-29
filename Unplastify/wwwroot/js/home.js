// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling (Made to vanilla js)
document.addEventListener('DOMContentLoaded', function () {
    function isScrolledIntoView(el) {
        let rect = el.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;

        let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
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

    const philBg = document.querySelector('#philBg');

    const controller = new ScrollMagic.Controller();

    const tween = gsap.to('#philBg h1', { duration: 0.6, color: 'white', backgroundColor: 'black' });

    const scene = new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: philBg,
        triggerHook: 0
    })
        .setTween(tween)
        .setPin(philBg)
        .addIndicators()
        .addTo(controller);

})
