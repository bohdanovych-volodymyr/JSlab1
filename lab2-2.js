function findRGBA(text) {
    var rgbaPattern = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([01](?:\.\d+)?)\)/;
    var match = text.match(rgbaPattern);
    if (match) {
        var rgbaValues = {
            red: parseInt(match[1]),
            green: parseInt(match[2]),
            blue: parseInt(match[3]),
            alpha: parseFloat(match[4])
        };
        return rgbaValues;
    } else {
        return null;
    }
}
var text = "Фоновий колір rgba(255, 128, 0, 0.5)";
var result = findRGBA(text);
if (result) {
    console.log("Значення RGBA:", result);
} else {
    console.log("RGBA не знайдено.");
}
