;(function() {


    function init() {
        attachEvents();
    }

    function attachEvents() {
        let elements = document.getElementsByClassName('approve-button');

        for(var i = 0; i < elements.length; i++) {
            elements[i].onclick = function(e) {
                setTimeout(function() {
                    attachEvents();
                }, 1000);
            };

            getAnAmen(elements[i]);
        }
    }

    function getAnAmen(btn) {
        let spans = btn.getElementsByTagName('span');
        for(var i = 0; i < spans.length; i++) {
            changeTheSpan(spans[i]);
        }
    }

    function changeTheSpan(span) {
        if(span.innerHTML == 'Approve') {
           span.innerHTML = 'Amen!';
        }
    }

    init();
})();
