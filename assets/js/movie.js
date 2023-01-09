loadPage()

function loadPage() {
    let out = '';
    let pre = '';
    let plr = '';
    const container = document.querySelector('.container');
    const prelaoder = document.querySelector('.preloader');
    const player = document.querySelector('.player');
    let movie = sessionStorage.getItem('movie') || 0;


    for (key in movies) {
        if (key == movie) {

            document.title = movies[key].name;

            pre += '<div class="preloader_video">';
            pre += '<video src="./content/video/' + movies[key].video[0] + '"muted></video>';
            pre += '</div>';

            pre += '<div class="preloader_data prelaoder_data_' + key + '">';
            pre += '<ul class="intro_item">';
            pre += '<h4>Film by</h4>'
            pre += '<li>' + movies[key].director[0] + '</li>';
            pre += '</ul>';
            pre += '<ul class="intro_item">';
            pre += '<li>' + movies[key].name + '</li>';
            pre += '</ul>';
            pre += '</div>';

            pre += '<div class="skip_btn btn">(skip)</div>';
            pre += '<div class="percent btn">(0%)</div>';


            out += '<div class="watch">';
            out += '<video src="./content/video/' + movies[key].video[1] + '"loop muted></video>';
            out += '</div>';

            plr += '<video class="player_video" src="' + movies[key].link + '" controls></video>';
            plr += '<div class="hide_btn btn">(hide)</div>';

            out += '<div class="data">';
            out += '<div class="left">'
            out += '<h4>' + movies[key].name + '</h4>';
            out += '<span>' + movies[key].date + '</span>';
            out += '<span>' + movies[key].duration + '</span>';
            out += '<div class="data_links">'
            out += '<div class="watch_link">watch</div>';
            out += '<a href="./screenplay.html">screenplay</a>';
            out += '</div>';
            out += '</div>';
            out += '<div class="right">';
            out += '<p>' + movies[key].description + '</p>';
            out += '</div>';
            out += '</div>';

            out += '<div class="baner">';
            out += '<img src="./content/images/' + movies[key].image + '" alt="' + movies[key].name + '">';
            out += '</div>';

            out += '<div class="collage">';
            out += '<video src="./content/video/' + movies[key].video[2] + '" loop autoplay muted></video>';
            out += '<video src="./content/video/' + movies[key].video[3] + '" loop autoplay muted></video>';
            out += '<video src="./content/video/' + movies[key].video[4] + '" loop autoplay muted></video>';
            out += '</div>';

            out += '<div class="scene">';
            out += '<video src="./content/video/' + movies[key].video[5] + '" loop autoplay muted></video>';
            out += '</div>';

            out += '<div class="titles">';
            buildTitles('Directed by', movies[key].director);
            buildTitles('Screenwriter', movies[key].screenwriter);

            out += '<ul class="title_item cast_item">';
            movies[key].writer.forEach(element => {
                out += '<h4>' + element[1] + '</h4>';
                out += '<li>' + element[0] + '</li>';
            });
            out += '</ul>';

            buildTitles('Stars', movies[key].stars);
            buildTitles('Music by', movies[key].musicDirector);
            buildTitles('Cinematography by', movies[key].photographyDirector);
            buildTitles('Film Editing by', movies[key].filmEditor);
            buildTitles('Casting By', movies[key].castingDirector);
            buildTitles('Production Design by', movies[key].productionDesign);
            buildTitles('Art Direction by', movies[key].artDirector);
            buildTitles('Set Decoration by', movies[key].setDesigner);
            buildTitles('Costume Design by', movies[key].costumeDesigner);
            
            buildCast('Produced by', movies[key].producer);
            buildCast('Assistant Director', movies[key].assistantDirector);

            function buildTitles(title, title_items) {
                if (title_items != -1 && title_items != null && title_items != undefined && title_items != '') {
                    out += '<ul class="title_item">';
                    out += '<h4>' + title + '</h4>';
                    title_items.forEach(element => {
                        out += '<li>' + element + '</li>';
                    });
                    out += '</ul>';
                }
            }
            out += '</div>';



            out += '<div class="cast">';
            out += '<div class="text_box">';
            buildCast('Cast (in credits order) verified as complete', movies[key].actors);
            buildCast('Makeup Department', movies[key].makeupDepartment);
            buildCast('Production Management', movies[key].productionManagement);
            buildCast('Art Department', movies[key].artDepartment);
            buildCast('Sound Department', movies[key].soundDepartment);
            buildCast('Special Effects by', movies[key].specialEffects);
            buildCast('Visual Effects by', movies[key].visualEffects);
            buildCast('Stunts', movies[key].stunts);
            buildCast('Camera and Electrical Department', movies[key].cameraAndElectricalDepartment);
            buildCast('Animation Department', movies[key].animationDepartment)
            buildCast('Casting Department', movies[key].castingDepartment);
            buildCast('Costume and Wardrobe Department', movies[key].costumeAndWardrobeDepartment);
            buildCast('Editorial Department', movies[key].editorialDepartment);
            buildCast('Location Management', movies[key].locationManagement);
            buildCast('Music Department', movies[key].musicDepartment);
            buildCast('Script and Continuity Department', movies[key].scriptAndContinuityDepartment);
            buildCast('Transportation Department', movies[key].transportationDepartment);
            buildCast('Additional Crew', movies[key].additionalCrew);
            buildCast('Thanks', movies[key].thanks);

            function buildCast(title, title_items) {
                if (title_items != -1 && title_items != null && title_items != undefined && title_items != '') {
                    out += '<ul class="cast_item">';
                    out += '<h4>' + title + '</h4>';
                    title_items.forEach(element => {
                        out += '<li><span>' + element[0] + '</span><span>' + element[1] + '</span></li>';
                    });
                    out += '</ul>';
                }
            }

            out += '</div>';
            out += '<div class="content_box"><video src="./content/video/' + movies[key].video[6] + '" loop autoplay muted></video></div>';
            out += '</div>';


            out += '<footer>';
            out += '<div class="list">';

            let i = Object.keys(movies).length - 1;

            while (i >= 0) {
                if (i == movie) {
                    out += '<a href="./movie.html" class="movie active_movie" data-id="' + i + '">' + movies[i].name + '</a>';
                } else {
                    out += '<a href="./movie.html" class="movie" data-id="' + i + '">' + movies[i].name + '</a>';
                }
                out += '<span> / </span>';
                i--;
            }

            out += '</div>';
            out += '</footer>';

        }
    }
    container.innerHTML = out;
    prelaoder.innerHTML = pre;
    player.innerHTML = plr;
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
            window.location = 'index.html';
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



const container = document.querySelector('.container');
const player = document.querySelector('.player');
const player_video = document.querySelector('.player_video');
const watch_link = document.querySelector('.watch_link');
const hide_btn = document.querySelector('.hide_btn');
const watch_video = document.querySelector('.watch video');


watch_link.addEventListener('click', playMovie);
watch_video.addEventListener('click', playMovie);
hide_btn.addEventListener('click', hideMovie);

function playMovie() {
    container.classList.add('hide_container');
    body.classList.remove('body_scroll');
    player.classList.add('player_show');
    player_video.play();
}

function hideMovie() {
    container.classList.remove('hide_container');
    body.classList.add('body_scroll');
    player.classList.remove('player_show');
    player_video.pause();
}





