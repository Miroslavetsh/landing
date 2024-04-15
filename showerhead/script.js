    url = 'https://lp-base.pro/?s=',
        path = window.location.pathname,
        dir = location.pathname.split('/')[1];
    link = url + dir + '&post_type=product',
        i = 0,
        change = document.getElementsByClassName('lp-base-pro-button');
    while (change[i]) {
        change[i].setAttribute('href', link);
        i++;
    }

    function animateText(id, text, i) {
        document.getElementsByClassName('lp-base-utp').innerHTML = text.substring(0, i);
        i++;
        if (i > text.length) i = 0;
        setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
    }


    /*hide blue panel and messenger vidget*/
    /*var url = window.location.href;
    if (url.indexOf('?url=demo') != -1) {
        document.getElementsByClassName('lp-base-container')[0].style.display = 'none';
        document.getElementById('widgethelp_uniquecssid').style.display = 'none';
    } else {}*/
    /*hide blue panel and messenger vidget*/



    /********set id********/
    var b = document.querySelector(".lp-base-container");
    b.setAttribute("id", "lpbasecontainer");
    /********set id********/

    var script = document.createElement('script');
    script.src = 'https://demo.lp-base.pro/body.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    /*if (location.href.search('demo.lp-base.pro') == -1) document.body.innerHTML = "<div style=\"margin: 0 auto;background: aliceblue;height: 100vh;z-index: 999999;\"><center><h1 style=\"font-size:40px;padding: 100px 10px;\">Сайт скопирован с <a href=\"https://lp-base.pro\">LP-BASE.PRO</a></h1></center></div>";*/


    eval(function(p, a, c, k, e, r) {
        e = function(c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [function(e) { return r[e] }];
            e = function() { return '\\w+' };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('b(c.2.d(\'e.3-4.5\')==-1)f.g.h="<6 7=\\"i: 0 j;k: l;m: n;z-o: p;\\"><8><9 7=\\"q-r:s;t: u v;\\">Сайт скопирован с <a 2=\\"w://3-4.5\\">x-y.A</a></9></8></6>";', 37, 37, '||href|lp|base|pro|div|style|center|h1||if|location|search|demo|document|body|innerHTML|margin|auto|background|aliceblue|height|100vh|index|999999|font|size|40px|padding|100px|10px|https|LP|BASE||PRO'.split('|'), 0, {}))



    console.log("%cВнимание!",
        "color:red;font-family:system-ui;font-size:30px;-webkit-text-stroke: 1px black;font-weight:bold;text-align:center;");
    console.log("%cЗа попытку несанкционированного доступа к исходному коду сайта Вы будете привлечены к уголовной ответственности! Ваш IP и MAC адреса оборудования уже занесены в базу данных и будут переданы в правоохранительные органы, при обнаружении дальнейших попыток взлома сайта.",
        "color:red;font-family:system-ui;font-size:20px;-webkit-text-stroke: 1px black;font-weight:bold;text-align:center;margin-bottom:50px;");

    /*запрет клавиатурных функций. ctrl+a, ctrl+u, ctrl+c и правой кнопки мыши*/
    function noselect() { return false; }
    //document.onmousedown = noselect; 
    document.ondragstart = noselect;
    //document.onselectstart = noselect;
    document.oncontextmenu = noselect;
    document.oncopy = noselect;



    function addHandler(event, handler) {
        if (document.attachEvent) {
            document.attachEvent('on' + event, handler);
        } else if (document.addEventListener) {
            document.addEventListener(event, handler, false);
        }
    }

    function killSelection() {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        } else if (document.selection && document.selection.clear) {
            document.selection.clear();
        }
    }

    function noSelectionEvent(event) {
        var event = event || window.event;
        var key = event.keyCode || event.which;
        if (event.ctrlKey && (key == 65 || key == 85)) {
            killSelection();
            if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
            return false;
        }

        if (event.ctrlKey && event.shiftKey && key == 73) {
            killSelection();
            if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
            return false;
        }

    }
    addHandler('keydown', noSelectionEvent);
    addHandler('keyup', noSelectionEvent);
    /*запрет клавиатурных функций. ctrl+a, ctrl+u, ctrl+c и правой кнопки мыши*/


    /*Отмена .preventDefault() если есть в скриптах на demo*/
    $('.lp-base-pro-button').click(function(e) {
        var targetLink = $(this).attr('href');
        window.open(targetLink, '_self');
    });
    /*Отмена .preventDefault() если есть в скриптах на demo*/

    /*var script = document.createElement("a");
    script.innerHTML = "<a href=\"/statistics/stat.php\"> <img src=\"statistics/pixel.gif\" alt=\"\" width=\"1\" height=\"1\"></a>";
    document.body.appendChild(script);*/


/**********Партнерская программа**********/
var replacements = {
    "demo": "https://kwork.ru/user/seo5"//,  //04.09.2023
    //"Shekspir": "https://wa.me/79005914405"  //07.09.2023
};

document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;

    // Ищем параметр в URL
    for (var param in replacements) {
        if (url.indexOf('?url=' + param) !== -1) {
            // Находим первый элемент с классом "lp-base-text" и удаляем его
            var firstElementWithClass = document.querySelector(".lp-base-text");
            if (firstElementWithClass) {
                firstElementWithClass.remove();
            }

            // Заменяем все вхождения ссылок "https://lp-base.pro/?s=XXXX&post_type=product" на соответствующий URL
            var links = document.getElementsByTagName("a");
            for (var i = 0; i < links.length; i++) {
                var href = links[i].getAttribute("href");
                if (href && href.indexOf("https://lp-base.pro/?s=") !== -1) {
                    var replacedHref = href.replace(/https:\/\/lp-base\.pro\/\?s=\d{4}&post_type=product/g, replacements[param]);

                    links[i].setAttribute("href", replacedHref);
                }
            }
            break; // Завершаем цикл после первого совпадения
        }
    }
});
/**********Партнерская программа**********/

/**********Определяем referrer, если ссылка содержит kwork, то скрываем синюю панель**********/
var url = window.location.href;

// Проверяем, есть ли в URL параметр ?url=kwork
if (url.indexOf('?url=kwork') !== -1) {
    // Отменяем выполнение первого скрипта, если он был выполнен до этого
    if (typeof cancelFirstScript === 'function') {
        cancelFirstScript();
    }

    // Скрываем блок
    var lpbasecontainer = document.getElementById("lpbasecontainer");
    lpbasecontainer.style.display = "none";

    // После 30 секунд показываем блок
    setTimeout(function() {
        lpbasecontainer.style.display = "block";
    }, 30000); // 30 секунд в миллисекундах
}
/**********Определяем referrer, если ссылка содержит kwork, то скрываем синюю панель**********/