var d = new Date();

var day = new Array("Воскресенье", "Понедельник", "Вторник",
    "Среда", "Четверг", "Пятница", "Суббота");

var month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря");

var week = new Array("чётная", "нечетная");


document.querySelector('#date').textContent = (day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()] +
    " " + d.getFullYear() + " г.");

document.querySelector('#chet').addEventListener("click", () => {
    document.querySelector('#nechet_block').className = "display_none";
    document.querySelector('#chet_block').className = "display_block_border_none";
    document.querySelector('#chet_blocktwo').className = "display_block_border_none";
    document.querySelector('#bottom').className = "chet-rects-block-lessons-block";
    document.querySelector('#chet').className = "btn_blue__active";
    document.querySelector('#nechet').className = "btn_blue";
    document.querySelector('#all').className = "btn_blue";
});

document.querySelector('#nechet').addEventListener("click", () => {
    document.querySelector('#nechet_block').className = "display_block_border_none";
    document.querySelector('#chet_block').className = "display_none";
    document.querySelector('#chet_blocktwo').className = "display_none";
    document.querySelector('#bottom').className = "chet-rects-block-lessons-block-bottom";
    document.querySelector('#chet').className = "btn_blue";
    document.querySelector('#nechet').className = "btn_blue__active";
    document.querySelector('#all').className = "btn_blue";
});

document.querySelector('#all').addEventListener("click", () => {
    document.querySelector('#nechet_block').className = "display_block_border_none";
    document.querySelector('#chet_block').className = "display_block";
    document.querySelector('#chet_blocktwo').className = "display_block_border_none";
    document.querySelector('#bottom').className = "chet-rects-block-lessons-block";
    document.querySelector('#all').className = "btn_blue__active";
    document.querySelector('#nechet').className = "btn_blue";
    document.querySelector('#chet').className = "btn_blue";

});


Date.prototype.getWeek = function () {
    var target = new Date(this.valueOf());
    var dayNr = (this.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var firstThursday = target.valueOf();
    target.setMonth(0, 1);
    if (target.getDay() != 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - target) / 604800000);
}

var DW = document.querySelector('#week'),
    NW = document.querySelector('#week ~ output'),
    NWG = document.querySelector('#week ~ output ~ output');

DW.value = new Date().toJSON().slice(0, 10); // сегодняшняя дата в формате yyyy-mm-dd для input type="date"

NW.innerHTML = new Date(DW.value).getWeek(); // номер текущей недели

if (new Date(DW.value).getWeek() % 2 == 0) {
    document.querySelector('.chetnost').textContent = "Нечётная неделя";
}
if (new Date(DW.value).getWeek() % 2 == 1) {
    document.querySelector('.chetnost').textContent = "Чётная неделя";
}


NWG.innerHTML = new Date(new Date(DW.value).getFullYear(), 11, 28).getWeek();