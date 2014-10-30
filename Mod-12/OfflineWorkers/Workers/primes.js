$(function() {
    $('#btnStart').click(function() {

        var worker = new Worker("/Workers/worker.js");
        worker.onmessage = function(e) {

            $('<li>').text(e.data).prependTo('#primes');
        };

        //for (var i = 2; i < 100000; i++) {
        //    var isPrime = true;

        //    for (var j = 2; j < i; j++) {
        //        if (i % j === 0) {
        //            isPrime = false;
        //        }
        //    }

        //    if (isPrime) {
        //        $('<li>').text(i).prependTo('#primes');
        //    }
        //}
    });
});
