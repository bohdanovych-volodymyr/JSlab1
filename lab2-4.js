function findTags(text, tag) {
    var regexPattern = new RegExp('<' + tag + '\\b[^>]*>', 'g');

    var tags = text.match(regexPattern);

    return tags;
}

var s = '<div><img src="image1.jpg"><p>Some text</p><img src="image2.jpg"></div>';
var tag = "img";
var foundTags = findTags(s, tag);
if (foundTags) {
    console.log("знайдені теги <img>:", foundTags);
} else {
    console.log("Теги не знайдено");
}
