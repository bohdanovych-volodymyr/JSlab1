function findDates(text) {
    // регулярний вираз для пошуку дат у форматі "РРРР-ММ-ДД"
    var regexPattern = /\d{4}-\d{2}-\d{2}/g;
    var dates = text.match(regexPattern);
    return dates;
}
var text = " 2023-10-28, 2022-10-15, 2021-10-03.";
var foundDates = findDates(text);
if (foundDates) {
    console.log("Знайдені дати:", foundDates);
} else {
    console.log("Дати не знайдено");
}
