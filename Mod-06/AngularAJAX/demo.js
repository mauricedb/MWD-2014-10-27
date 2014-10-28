(function () {
    var app = angular.module('ajaxApp', ['ngResource']);

    //app.controller('demoCtrl', function ($scope, $http) {

    //    var promisse = $http.get('/api/books');
    //    promisse.then(function(resp) {
    //            $scope.books = resp.data;
    //        },
    //        function(err) {
    //            console.log(err);
    //        });
    //});


    app.factory('Book', function($resource) {
        return $resource('/api/books');
    });

    app.controller('demoCtrl', function ($scope, Book) {
        $scope.books = Book.query();
        console.log($scope.books);

        $scope.books.$promise.then(function() {
            for (var i = 0; i < $scope.books.length; i++) {

            }
        }, function(err) {
            // Notify user of errors
        });
    });

}());