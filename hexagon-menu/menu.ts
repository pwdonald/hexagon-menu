window.onload = () => {
    var hex = document.getElementsByClassName('hex');

    [].forEach.call(document.querySelectorAll('.hex'), function (el) {
        el.addEventListener('mouseover', () => {
            if (!el.classList.contains('hex-selected')) {
                el.classList.add('hex-spin');
                el['transitionint'] = window.setTimeout(() => {
                    el.classList.add('hex-selected');  
                }, 250); 
            }
        }, false);

        el.addEventListener('mouseleave', () => { 
            if (!el['timeout']) {
                el['timeout'] = window.setTimeout(() => {
                    el.classList.add('hex-spin');
                    el['transitionint'] = window.setTimeout(() => {
                        el.classList.remove('hex-selected');
                    }, 250); 
                    el['timeout'] = undefined;
                }, 5000);
            }
        }, false);

        el.addEventListener('webkitAnimationEnd', () => {
            el.classList.remove('hex-spin');
        }, false);
        el.addEventListener('animationend', () => {
            el.classList.remove('hex-spin');
        }, false);
    });
};