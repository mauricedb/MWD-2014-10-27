for (var i = 2; i < 100000; i++) {
    var isPrime = true;

    for (var j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        postMessage(i);
        
    }
}
