/**
 * Created by Instructor on 28/10/2014.
 */

(function () {
    var app = angular.module('demoApp', []);

    app.controller('demoCtrl', function ($scope) {
        $scope.person = {
            name: 'Maurice'
        }
    });


    app.directive('dmSetFocus', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element[0].focus();


                console.log(attrs);
            },
            scope:true
        };
    });

    app.directive('myTemplate', function () {
        return {
            template: 'This <span class="">is</span> the new content. And the original is: <span ng-transclude=""></span>',
            transclude:true,
            scope:{}
    }
    });

}());