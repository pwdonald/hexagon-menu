window.onload = () => {
    var hex = document.getElementsByClassName('hex');

    [].forEach.call(document.querySelectorAll('.hex'), function (el) {
        el.addEventListener('mouseover', () => {
            if (!el.classList.contains('hex-selected')) {
                el.classList.add('hex-spin');
                el.classList.add('hex-selected');   
            }
        }, false);

        el.addEventListener('mouseleave', () => {
            if (!el['timeout']) {
                el['timeout'] = window.setTimeout(() => {
                    el.classList.add('hex-spin');
                    el['timeout'] = undefined;
                    el.classList.remove('hex-selected');
                }, 5000);
            }
        }, false);

        el.addEventListener('webkitAnimationEnd', () => {
            el.classList.remove('hex-spin');
        }, false);
    });
};