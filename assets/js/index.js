let mob = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;

loadPage()

function loadPage() {
    let out = '';
    const movies_container = document.querySelector('.movies');
    let i = Object.keys(movies).length - 1;

    while (i >= 0) {
        out += '<a href="./movie.html" class="movie movie_item" data-id="' + i + '">';
        if (mob) {
            out += '<h4>' + movies[i].name + '</h4>';
        }
        out += '<img src="./content/images/' + movies[i].image + '" alt="' + movies[i].name + '">';
        out += '</a>';

        i--;
    }
    movies_container.innerHTML = out;




    if (!mob) {
        let imgs = document.images,
            len = imgs.length,
            counter = 0;

        [].forEach.call(imgs, function (img) {
            if (img.complete)
                incrementCounter();
            else
                img.addEventListener('load', incrementCounter, false);
        });

        function incrementCounter() {
            counter++;
            if (counter === len) {
                let blocks = document.getElementsByClassName("movie_item");
                let container = document.getElementsByClassName("movies");
                let hs = new HorizontalScroll.default({
                    blocks: blocks,
                    container: container,
                    isAnimated: false,
                });
            }
        }
    }
}






const movie_title = document.querySelector('.movie_title');
const movie_list = document.querySelectorAll('.movie');
movie_list.forEach(element => {
    element.addEventListener('mouseover', function () {
        let id = element.getAttribute('data-id');
        movie_title.innerHTML = '- ' + movies[id].name + ' -';
    })
    element.addEventListener('mouseleave', function () {
        movie_title.innerHTML = '';
    })
});





loadMenu()
function loadMenu() {
    let out = '';
    const menu_list = document.querySelector('.menu_list');
    let i = Object.keys(movies).length - 1;

    while (i >= 0) {
        out += '<a href="./movie.html" data-id="' + i + '" class="movie">';
        out += movies[i].name;
        out += '<video src="./content/video/' + movies[i].video[5] + '" loop autoplay muted></video>';
        out += '</a>';
        out += '<span> / </span>'
        i--;
    }
    menu_list.innerHTML = out;
}



const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');


menu_btn.addEventListener('click', function () {
    menu.classList.toggle('menu_show');
    if (menu.classList.contains('menu_show')) {
        menu_btn.innerHTML = '(close)';
        container.classList.add('hide_container');
    } else {
        menu_btn.innerHTML = '(list)';
        container.classList.remove('hide_container');
    }
})

