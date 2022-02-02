(() => {
    function blink(element) {
        window.setInterval(() => {
            if (element.style.visibility != 'hidden') {
                element.style.visibility = 'hidden';
            }
            else {
                element.style.visibility = 'visible';
            }
        }, 700);
    }

    function init() {
        const blinkers = document.querySelectorAll('.blink');
    
        if (blinkers) {
            blinkers.forEach(blink);
        }
    }

    init();
})();