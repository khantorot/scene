loadPage();

function loadPage() {
    let pre = '';
    let out = '';
    let movie = sessionStorage.getItem('movie') || 0;
    const prelaoder = document.querySelector('.preloader');

    for (key in movies) {
        if (key == movie) {
            document.title = movies[key].name + ' | Screenplay';
            readTextFile("./content/screenplay/" + key + ".txt");

            pre += '<div class="preloader_video">';
            pre += '<video src="./content/video/' + movies[key].video[5] + '"muted></video>';
            pre += '</div>';

            pre += '<div class="preloader_data">';
            pre += '<ul class="intro_item">';
            pre += '<li>' + movies[key].name + '</li>';
            pre += '</ul>';

            pre += '<ul class="intro_item">';
            pre += '<h4>Written by</h4>';
            movies[key].screenwriter.forEach(element => {
                pre += '<li>' + element + '</li>';
            });
            pre += '</ul>';

            pre += '</div>';

            pre += '<div class="skip_btn btn">(skip)</div>';
            pre += '<div class="percent btn">(0%)</div>';

            document.querySelector('.screenplay').innerHTML += '<br><a href="./content/screenplay/' + key + '.txt" download="./content/screenplay/' + key + '.txt" target="_blank" class="screenplay_download">download</a>';
        }
    }
    prelaoder.innerHTML = pre;
}


function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                document.querySelector('.screenplay').innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}


const progress = document.querySelector('.progress');
const close_btn = document.querySelector('.close_btn');
let scrolled;

window.addEventListener('scroll', function (e) {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= document.documentElement.clientHeight) {
        close_btn.innerHTML = '(top)';
    } else {
        close_btn.innerHTML = '(back)';
    }



    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%';
})


close_btn.addEventListener('click', function (e) {
    if (this.innerHTML == '(back)') {
        main.classList.remove('fade_out_active');
        setTimeout(function () {
            window.location = 'movie.html';
        }, 1000);
    } else {
        scrollTo(document.documentElement, 0, 2000);
    }
})




function scrollTo(element, to, duration) {
    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    let animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

