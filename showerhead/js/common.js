var i, c, y, v, s, n;
v = document.getElementsByClassName("youtube");
if (v.length > 0) {
    s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = '.youtube{max-width:100%;height:inherit;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}';
    document.body.appendChild(s)
}
for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function() {
        var a = document.createElement("iframe");
        a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0");
        a.setAttribute("allowfullscreen","");
        a.style.width = this.style.width;
        a.style.height = this.style.height;
        this.parentNode.replaceChild(a, this)
    }
};

$(document).ready(function() {

    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".countdown").attr("data-timer", perem);
    $(".countdown").TimeCircles({
        "animation": "smooth",
        "use_inner_background": false,
        "circle_inner_bg_color": "#96D10A",
        "bg_width": 0.8,
        "fg_width": 0.030,
        "circle_bg_color": "#96D10A",
        "time": {
            "Days": {
                "text": "Днів",
                "color": "#FE722B",
                "show": false
            },
            "Hours": {
                "text": "Годин",
                "color": "#FE722B",
                "show": true
            },
            "Minutes": {
                "text": "Хвилин",
                "color": "#96D10A",
                "show": true
            },
            "Seconds": {
                "text": "Секунд",
                "color": "#FE722B",
                "show": true
            }
        }
    });
    timer_hour = $('.textDiv_Hours span').html();
    if (timer_hour == 4 || timer_hour == 3 || timer_hour == 2 ) {
        $('.textDiv_Hours h4').text('Години');
    }
    if (timer_hour == 1 ) {
        $('.textDiv_Hours h4').text('Година');
    }

    $("a").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    $(".rev_block").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        lazyLoad: false,
        nav: true,
        items: 1,
        margin: 5
    });
    $(".nature_slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        lazyLoad: false,
        nav: true,
        items:1,
        margin: 0,
        responsiveClass:true,
        dots:false,
        responsive:{
        665:{
            items:2,
            margin: 10,
            dots:false
        },
        980:{
            items:3,
            margin: 10,
            dots:false
        }
        
    }
    })
});