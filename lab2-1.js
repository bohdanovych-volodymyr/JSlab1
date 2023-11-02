function isIPAddress(ip) {
    let numbers = ip.split('.');
    
    if (numbers.length !== 4) {
        return false;
    }

    for (let i = 0; i < numbers.length; i++) {
        const octet = parseInt(numbers[i], 10); 

        if (isNaN(octet) || octet < 0 || octet > 255) {
            return false; 
        }
    }

    return true; 
}
alert(isIPAddress("255.255.255.256")); 