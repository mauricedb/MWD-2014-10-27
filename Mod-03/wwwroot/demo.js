/**
 * Created by Instructor on 27/10/2014.
 */

(function () {

    function Person(name) {
        if (this === window) throw new Error('PLease use new');

        this._name = name;

        //this.walk = function(){
        //    console.log( this.name + ' is walking');
        //}
    }

    Person.prototype.walk = function () {
        console.log(this._name + ' is walking');
    }

    var maurice = new Person('maurice');
    console.log(maurice)
    console.log(maurice.name);

    var rich = new Person('Rich');
    console.log(rich.name);

    console.log(maurice.name);

    maurice.walk();
    rich.walk();


    rich.walk = function () {
        console.log('Nope I am running');
    }

    maurice.walk();
    rich.walk();

    //delete rich.walk;
    //delete  Person.prototype.walk;

    //Person.prototype.walk = function(){};

    rich.walk();
    maurice.walk();


    function SuperHero(name){
        Person.call(this, name);
        this.superName =name;
    }

    SuperHero.prototype = new Person();

    SuperHero.prototype.fly = function(){
        console.log(this.superName + ' is flying');
    }


    var superman = new SuperHero('SuperMan');
    superman.fly();
    superman.walk();


    if (typeof superman.fly === 'function')    {
        superman.fly();
    }


    for (var p in superman){
        if (superman.hasOwnProperty(p)) {
            console.log(p, superman[p]);
        }
    }
}());