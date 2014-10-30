/**
 * Created by Instructor on 30/10/2014.
 */
(function () {

    if (!localStorage.useCount) {
        localStorage.useCount = 1;

    } else {
        localStorage.useCount = (+localStorage.useCount) + 1;

    }

    console.log(localStorage.useCount);
    console.log(localStorage['useCount']);


    localStorage.someObj =JSON.stringify ({x:1});
console.log(localStorage.someObj )
}());
