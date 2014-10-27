(function () {

    var data = [1, 2, 3, 4, 5];
    data[8] = 8;

    //for (var i = 0; i < data.length; i++) {
    //    if (data[i]) {
    //        console.log(i, data[i])
    //    }
    //}
    iterate(data, function (el) {
        console.log(el)
    });

    var sum = 0;
    //for (var i = 0; i < data.length; i++) {
    //    if (data[i]) {
    //        sum += data[i];
    //    }
    //}
    iterate(data, function (el) {
        sum += el
    });
    console.log("Sum = ", sum);


    var product = 1;
    //for (var i = 0; i < data.length; i++) {
    //    if (data[i]) {
    //        product *= data[i];
    //    }
    //}
    iterate(data, function (el) {
        product *= el
    });

    console.log("Product = ", product);


    var product2 = 1;
    data.forEach(function (el) {
        product2 *= el
    })
    console.log("Product2 = ", product2);

    //data.length=0;
    var product3 = data.reduce(function (prev, current) {
        return prev * current;
    }, 1);
    console.log("product3 = ", product3);

    function iterate(data, fn) {
        for (var i = 0; i < data.length; i++) {
            if (data[i]) {
                fn(data[i]);
            }
        }

    }


    var o1 = {
        x: 12,
        f: function () {
            console.log(this, this.x);
        }
    }

    o1.fbetter = o1.f.bind(o1);

    o1.f();
    console.log('better');
    o1.fbetter();

    var f = o1.f;
    f();
    var fbetter = o1.fbetter;
    console.log('better');
    fbetter();

    var o2 = {x: 'Hello there'}

    o2.f = f;
    o2.f();


    var a1 = [1, 2, 3];
    var a2 = [4, 5, 6];
    [].push.apply(a1, a2);
    console.log(a1);


    //function moduleFactory(){
    //
    //};
    //
    //var module = moduleFactory();


    var module = (function () {
        var counter = 0;

        function demo() {
            counter++;
            console.log('In demo', counter);
        }

        function privateHelper() {

        };

        return {
            demo: demo
        }

    }());


    module.demo();
    module.demo();
    module.demo();
    console.log(module.counter);


//    fn();
//
//var fn=    function (){}


    function sumFn() {
        var sum = 0;
        //for (var i = 0; i< arguments.length; i++){
        //    sum += parseInt( arguments[i], 10);
        //}

        sum = [].reduce.call(arguments, function (x, y) {
            return x + y;
        }, 0);
        return sum;
    }

    console.log(sumFn(1));
    console.log(sumFn(1, 2));
    console.log(sumFn(1, 2, 3));
    console.log(sumFn(1, '2', 3));


    var xvalue = document.getElementById('x').value
    console.log(xvalue);
    var data = eval(xvalue);
    console.log(data.length)


    data['reduce']()

}());