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
})

document.querySelector('#nechet').addEventListener("click", () => {
    document.querySelector('#nechet_block').className = "display_block_border_none";
    document.querySelector('#chet_block').className = "display_none";
    document.querySelector('#chet_blocktwo').className = "display_none";
    document.querySelector('#bottom').className = "chet-rects-block-lessons-block-bottom";
    document.querySelector('#chet').className = "btn_blue";
    document.querySelector('#nechet').className = "btn_blue__active";
    document.querySelector('#all').className = "btn_blue";
})

document.querySelector('#all').addEventListener("click", () => {
    document.querySelector('#nechet_block').className = "display_block_border_none";
    document.querySelector('#chet_block').className = "display_block";
    document.querySelector('#chet_blocktwo').className = "display_block_border_none";
    document.querySelector('#bottom').className = "chet-rects-block-lessons-block";
    document.querySelector('#all').className = "btn_blue__active";
    document.querySelector('#nechet').className = "btn_blue";
    document.querySelector('#chet').className = "btn_blue";

})