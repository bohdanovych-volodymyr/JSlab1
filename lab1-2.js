function isPrime(n) {
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}
function findPrimes(a, b) {
    if (a < 2) a = 2; 
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
findPrimes(1,100);