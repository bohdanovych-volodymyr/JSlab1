function findPosNum(text) {
    var regexPattern = /\b\d+\.\d+|\b\d+\b/g;
    var numbers = text.match(regexPattern);
    var positiveNumbers = numbers.filter(function (number) {
        return parseFloat(number) > 0;
    });
    return positiveNumbers;
}

var text = "Вартість товару $11.99 $24.95.";
var foundNumbers = findPosNum(text);
if (foundNumbers) {
    console.log("Додатні числа:", foundNumbers);
} else {
    console.log("Додатні числа не знайдено");
}
