/**
 * Created by Instructor on 30/10/2014.
 */

(function () {

    var app = angular.module('localApp', []);


    app.controller('booksCtrl', function ($scope) {

        var openRequest = indexedDB.open('booksDB', 3);
        var db;

        openRequest.onupgradeneeded = function (e) {
            db = openRequest.result;

            console.log(e);
            db.createObjectStore('books2', {autoIncrement: true});
        }

        openRequest.onsuccess = function () {
            db = openRequest.result;
        }

        $scope.book = {
            title: '',
            author: ''
        };
        $scope.add = function () {

            var tx = db.transaction(['books2'], 'readwrite')
            var books2 = tx.objectStore('books2');
            books2.put($scope.book);

            tx.oncomplete = function () {
                $scope.$apply(function () {
                    $scope.book = {
                        title: '',
                        author: ''
                    };
                });
            }

        };

        $scope.books = [];
        $scope.display = function () {

            var tx = db.transaction(['books2'], 'readonly')
            var books2 = tx.objectStore('books2');

            var openRequest = books2.openCursor();
            openRequest.onsuccess = function () {
                if (openRequest.result) {
                    var book = openRequest.result.value
                    $scope.$apply(function () {
                        $scope.books.push(book);
                    });

                    openRequest.result.continue();
                }

            }

        };
    });

}());