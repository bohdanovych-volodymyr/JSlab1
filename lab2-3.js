function findHexColor(text){
    var colorPattern = /#([0-9A-Fa-f]{3}){1,2}\b/;
    var match = text.match(colorPattern);

    if (match) {
        return match[0];
    } else {
        return null;
    }
}
var text = "Колір #ABCDEF";
var result = findHexColor(text);
if(result) {
    console.log ("Колір:", result);
} else {
    console.log ("Кольори не знайдено");
}
