/**
 * Created by Instructor on 29/10/2014.
 */

(function () {

    var app = angular.module('spaApp', ['ngRoute']);

    app.config(function($routeProvider, $locationProvider){

        $routeProvider.when('/list', {
            controller:'ListCtrl',
            templateUrl: '/templates/list.html'
        });

        $routeProvider.when('/edit/:bookId', {
            controller:'EditCtrl',
            templateUrl: '/templates/edit.html',
            resolve:{
                book: function($route){
                    return {
                        id: $route.current.params.bookId,
                            title: 'Book ' + $route.current.params.bookId
                    };
                }
            }
        });

        $routeProvider.otherwise('/list')

        //$locationProvider.html5Mode(true);
    });

    app.controller('ListCtrl', function ($scope, $location) {
        $scope.books = [{
            id: '1',
            title: 'Book 1'
        }, {
            id: '2',
            title: 'Book 2'
        }, {
            id: '3',
            title: 'Book 3'
        }]


        $scope.editBook = function(book){
            $location.path('/edit/' + book.id);
        };

    })

    app.controller('EditCtrl', function ($scope, $route, book) {

        $scope.book = book;
    });


}());