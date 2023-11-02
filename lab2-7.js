function findEmailsInText(text) {
    // регулярний вираз для пошуку email-адрес
    var regexPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    var emails = text.match(regexPattern);
    return emails;
}

var text = " bohdanovychvolodymyr@gmail.com ifntung@ukr.net or support@gmail.com for more information.";
var foundEmails = findEmailsInText(text);
if (foundEmails) {
    console.log("знайдені пошти:", foundEmails);
} else {
    console.log("Пошти не були знайдені.");
}
