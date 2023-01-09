

showPreloader();

function showPreloader() {

    const preloader = document.querySelector('.preloader');
    const percent = document.querySelector('.percent');
    let i = 0;

    let inter = setInterval(() => {
        if (i < 96) {
            i += 4;
            percent.innerHTML = '(' + i + '%)';
        } else {
            const preloader_video = document.querySelector('.preloader_video video');
            let video_duration = (preloader_video.duration * 1000 >= 10000) ? (preloader_video.duration * 1000) : 10000;

            if (preloader_video.readyState >= 3) {
                percent.innerHTML = '(100%)';

                setTimeout(function () {
                    preloader_video.play();
                    preloader.classList.add('preloader_show');
                    setTimeout(showPage, video_duration);
                    
                }, 300)

                clearInterval(inter);
            }
        }
    }, 60);
}





const body = document.querySelector('body');
const main = document.querySelector('main');
const prelaoder = document.querySelector('.preloader');
const links = document.querySelectorAll('a');
const skip_btn = document.querySelector('.skip_btn');



skip_btn.addEventListener('click', showPage);



function showPage() {
    prelaoder.classList.add('preloader_hide');
    main.classList.add('fade_out_active');
    body.classList.add('body_scroll');

    if (window.location.pathname.split("/").pop() == 'movie.html') {
        const watch_video = document.querySelector('.watch video');

        watch_video.play();
    }
}




links.forEach(function (link) {
    link.addEventListener('click', onLinkClicked);

    function onLinkClicked(event) {
        if (this.getAttribute('target') != '_blank') {
            event.preventDefault();
            main.classList.remove('fade_out_active');
            setTimeout(onAnimationComplete, 1000);
        }
        if (this.classList.contains('movie')) {
            let id = this.getAttribute('data-id');
            sessionStorage.setItem('movie', id);
        }
    }

    function onAnimationComplete() {
        window.location = link.href;
    }
});





