/**
 * Created by Instructor on 27/10/2014.
 */



(function () {
    'use strict';
    var n = 0.1 + 0.2;

// Not 0.3 but 0.30000000000000004
    console.log(n);

    //n.value = 1;
    //console.log('n.value', n.value);

    n = {};
    n.value = 1;
    console.log('n.value', n.value);

// is false
    console.log(0.3 == n);


    var obj = {
        x: undefined
    };

    console.log(obj.x);
// An runtime error
//console.log(obj.x.a);
    console.log(obj.y);
// An runtime error
//console.log(obj.y.z);

    obj.value = 1;
    console.log('obj.value', obj.value);


    function demo() {
        var x = 1 + 1;
    };

    demo.value = 52;

    console.log(demo)
    console.log(demo.value)


    var bad = 12;



    var now = new Date();
    console.log(now);

    var date = new Date(2014, 9, 27);
    console.log(date);

    var date2 = new Date(2014, -12, -131);
    console.log(date2);


    var o1={}
    console.log(o1, !!o1)

    if (!!o1){
        console.log('o1 is truthy');
    } else {
        console.log('o1 is falsy');
    }



    function dotIt() {

        return {
            msg:'Done'
        };
    };

    console.log('dotIt()', dotIt());


    console.log('+true', +true);
    console.log("+'true'", +'true');

    if (true === 'true'){
        console.log('expression is truthy');
    } else {
        console.log('expression is falsy');
    }


    var data = [1,2,3];

    data.something = 'A string';

    for(var n in data){
        console.log(n, data[n]);
    }

    console.log(data['something']);



    hoisted();


    function hoisted(){
        console.log('I am hoisted');
    }



    var nothoisted = function (){
        console.log('I am not hoisted');
    }
    nothoisted();
})();
